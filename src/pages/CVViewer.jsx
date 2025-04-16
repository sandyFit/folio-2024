import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const CVViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [error, setError] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setError(null);
    }

    function onDocumentLoadError({ error }) { 
        setError('Failed to load PDF. Please check the file path and try again.');
    }

    return (
        <div
            className="pdf-container"
            style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
            }}
        >
            <Document
                file="/my_cv.pdf" 
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<div style={{ textAlign: 'center' }}>Loading PDF...</div>}
                error={<div style={{ color: 'red', textAlign: 'center' }}>Failed to load PDF</div>}
                options={{
                    disableAutoFetch: true,
                    disableStream: true,
                }}
            >
                {Array.from(
                    new Array(numPages),
                    (_, index) => (
                        <Page
                            key={`page_${index +1 }`}
                            pageNumber={index +1 }
                            width={Math.min(window.innerWidth -40, 800)}
                            loading={<div>Loading page {index + 1}...</div>}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    )
                )}
            </Document>
        </div>
    );
};

export default CVViewer;
