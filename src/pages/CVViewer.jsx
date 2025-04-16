import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const CVViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setIsLoaded(true);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setError(null);
    }

    function onDocumentLoadError({ error }) {
        setError('Failed to load PDF. Please check the file path and try again.');
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/my_cv.pdf'; // The URL of the CV PDF
        link.download = 'CV.pdf'; // Filename for download
        link.click(); // Trigger download
    };

    return (
        <div
            className={`pdf-container ${isLoaded ? 'fade-in' : ''}`}
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
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={Math.min(window.innerWidth - 40, 800)}
                            loading={<div>Loading page {index + 1}...</div>}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    )
                )}
            </Document>
            <button
                onClick={handleDownload}
                style={{
                    display: 'block',
                    margin: '20px auto',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: '500',
                    backgroundColor: 'var(--secondary)',
                    color: 'var(--primary)',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Download CV
            </button>
        </div>
    );
};

export default CVViewer;
