import React from 'react';

const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
            <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Duke ngarkuar...</span>
            </div>
            <p className="text-muted">Duke ngarkuar pronat...</p>
        </div>
    </div>
);

export default LoadingSpinner;
