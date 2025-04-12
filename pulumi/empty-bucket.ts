// save this as empty-bucket.ts

import * as AWS from 'aws-sdk';

async function emptyBucket() {
    const s3 = new AWS.S3();
    const bucketName = 'folio-bucket-dev-1744161648978';

    console.log(`Emptying bucket: ${bucketName}`);

    try {
        // List all objects in the bucket
        const listParams = {
            Bucket: bucketName
        };

        const listedObjects = await s3.listObjectsV2(listParams).promise();

        if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
            console.log('Bucket is already empty');
            return;
        }

        // Create an array of objects to delete
        const deleteParams: AWS.S3.DeleteObjectsRequest = {
            Bucket: bucketName,
            Delete: { Objects: [] }
        };

        listedObjects.Contents.forEach(({ Key }) => {
            deleteParams.Delete.Objects.push({ Key: Key ?? '' });
        });

        // Delete objects from the bucket
        await s3.deleteObjects(deleteParams).promise();

        // If there are more objects to delete (pagination)
        if (listedObjects.IsTruncated) {
            console.log('More objects to delete, continuing...');
            await emptyBucket();
        }

        console.log('Bucket emptied successfully');
    } catch (err) {
        console.error('Error emptying bucket:', err);
    }
}

// Run the function
emptyBucket();
