import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as mime from "mime";
import * as fs from "fs";
import * as path from "path";


// 1. Create the bucket
const bucket = new aws.s3.BucketV2("folio-bucket", {
    bucket: `folio-bucket-${pulumi.getStack()}-${Date.now()}`,  // Put the timestamp back temporarily
    forceDestroy: true
});

// 2. Set ownership controls
const ownershipControls = new aws.s3.BucketOwnershipControls("ownership-controls", {
    bucket: bucket.id,
    rule: { objectOwnership: "BucketOwnerEnforced" }
});

// 3. Configure public access
const publicAccessBlock = new aws.s3.BucketPublicAccessBlock("public-access-block", {
    bucket: bucket.id,
    blockPublicAcls: true,
    blockPublicPolicy: false,
    ignorePublicAcls: true,
    restrictPublicBuckets: false
});

// 4. Website configuration
const website = new aws.s3.BucketWebsiteConfigurationV2("website", {
    bucket: bucket.id,
    indexDocument: { suffix: "index.html" },
});

// 5. Create CloudFront Origin Access Identity
const originAccessIdentity = new aws.cloudfront.OriginAccessIdentity("originAccessIdentity", {
    comment: "OAI for folio-bucket"
});
// (Custom Domain) 1. Create ACM Certificate
const certificate = new aws.acm.Certificate("domain-cert", {
    domainName: "trishramos.com",
    subjectAlternativeNames: ["www.trishramos.com"],
    validationMethod: "DNS",
}, { provider: new aws.Provider("us-east-1", { region: "us-east-1" }) });

// 6. Create CloudFront distribution
const cdn = new aws.cloudfront.Distribution("cdn", {
    enabled: true,
    isIpv6Enabled: true,
    defaultRootObject: "index.html",

    origins: [{
        originId: bucket.arn,
        domainName: bucket.bucketRegionalDomainName,
        s3OriginConfig: {
            originAccessIdentity: originAccessIdentity.cloudfrontAccessIdentityPath,
        },
    }],

    defaultCacheBehavior: {
        targetOriginId: bucket.arn,
        viewerProtocolPolicy: "redirect-to-https",
        allowedMethods: ["GET", "HEAD", "OPTIONS"],
        cachedMethods: ["GET", "HEAD", "OPTIONS"],
        forwardedValues: {
            queryString: false,
            cookies: { forward: "none" },
        },
        minTtl: 0,
        defaultTtl: 3600,
        maxTtl: 86400,
    },

    customErrorResponses: [{
        errorCode: 404,
        responseCode: 200,
        responsePagePath: "/index.html",
        errorCachingMinTtl: 10
    },
    {
        errorCode: 403,
        responseCode: 200,
        responsePagePath: "/index.html",
        errorCachingMinTtl: 10
    }],

    priceClass: "PriceClass_100",
    restrictions: {
        geoRestriction: {
            restrictionType: "none",
        },
    },

    // (Custom Domain) 3. Update CloudFront with Custom Domain
    aliases: ["trishramos.com", "www.trishramos.com"],
    viewerCertificate: {
        acmCertificateArn: certificate.arn,
        sslSupportMethod: "sni-only",
        minimumProtocolVersion: "TLSv1.2_2021",
    },
});

// 7. Bucket policy for public access
const bucketPolicy = new aws.s3.BucketPolicy("bucket-policy", {
    bucket: bucket.id,
    policy: pulumi.all([bucket.arn, originAccessIdentity.id]).apply(([arn, oaiId]) => JSON.stringify({
        Version: "2012-10-17",
        Statement: [
            {
                Effect: "Allow",
                Principal: {
                    AWS: `arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${oaiId}`
                },
                Action: ["s3:GetObject"],
                Resource: [`${arn}/*`]
            }
        ]
    }))
}, {
    retainOnDelete: true,
    dependsOn: [originAccessIdentity, cdn]
});

// Explicit upload for specific files that need special handling
new aws.s3.BucketObject(
    "humans-txt",
    {
        bucket: bucket.id,
        key: "human.txt",
        source: new pulumi.asset.FileAsset("../human.txt"),
        contentType: "text/plain",
    },
    {
        dependsOn: [bucketPolicy]
    }
);

new aws.s3.BucketObject(
    "404-page",
    {
        bucket: bucket.id,
        key: "404.html",
        source: new pulumi.asset.FileAsset("../src/pages/PageNotFound.jsx"),
        contentType: "text/html",
    },
    {
        dependsOn: [bucketPolicy]
    }
);

// 8. Upload all files recursively
const uploadDirectory = function (directoryPath: string) {
    const files = fs.readdirSync(directoryPath);
    for (const file of files) {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            uploadDirectory(filePath);
        } else {
            // Skip humans.txt and 404.html since we're handling them separately
            if (file !== 'humans.txt' && file !== '404.html') {
                new aws.s3.BucketObject(
                    path.relative("../dist", filePath).replace(/\\/g, "/"),
                    {
                        bucket: bucket.id,
                        source: new pulumi.asset.FileAsset(filePath),
                        contentType: mime.getType(filePath) || undefined,
                    },
                    {
                        dependsOn: [bucketPolicy, originAccessIdentity, cdn],
                        retainOnDelete: true
                    }
                );
            }
        }
    }
};

uploadDirectory("../dist");

// Cache invalidation logic removed as aws.cloudfront.Invalidation is not supported in Pulumi AWS library.
// If invalidation is required, consider using AWS SDK or AWS CLI outside of Pulumi.

// Export the URLs
export const bucketName = bucket.id;
export const websiteUrl = bucket.websiteEndpoint;
export const cloudfrontUrl = cdn.domainName;
export const cloudfrontDistributionId = cdn.id;
export const certificateArn = certificate.arn;
