import React from 'react'
import Hero2 from './Hero2'
import About from './About'
import Projects from './Projects'

const Home = () => {
    return (
        <div>
            <section id='index' className=''>
                <Hero2 />                
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

export default Home