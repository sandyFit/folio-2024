import React, { useState } from 'react';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import Test from './layouts/Test'

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
