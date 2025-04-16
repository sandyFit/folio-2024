import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound.jsx';
import CVViewer from './pages/CVViewer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path="/cv" element={<CVViewer />} />
                <Route path='*' element={<PageNotFound/> } />
            </Routes>
        </Router>    
    </React.StrictMode>,
)
