import React from 'react'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'

const Home = () => {
    return (
        <div>
            <section id='index' className=''>
                <Hero />                
            </section>
            <section id='work' className=''>
                <Projects />                
            </section>
            <section id='info' className=''>
                <About/>               
            </section>
        </div>
    )
}

export default Home;

