import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.jsx';

// Lazy loading the CVViewer
const CVViewer = lazy(() => import('./pages/CVViewer.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route
                    path="/cv"
                    element={
                        <Suspense fallback={<div className="text-center">Loading CV...</div>}>
                            <CVViewer />
                        </Suspense>
                    }
                />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
