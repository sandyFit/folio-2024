import React from 'react';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Footer from './layouts/Footer';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer/>
        </div>
    )
}

export default App;
