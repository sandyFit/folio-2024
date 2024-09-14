import React, { useState } from 'react';
import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import Test from './layouts/Test'
import { ContextProvider } from './utils/globalContext';

const App = () => {

    
    return (
        <ContextProvider>
            <Navbar />
            <Home />
            <Footer/>
        </ContextProvider>
    )
}

export default App;
