import React, { useEffect, useState } from 'react';
import ProjectsList from '../layouts/ProjectsList';
import HappyFace from '../components/ui/HappyFace';
import Header from '../components/ui/Header';
import { animateScroll as scroll } from 'react-scroll';

const Projects = () => {
    const [showFloatingBtn, setShowFloatingBtn] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 400;

        if (scrollPosition > scrollThreshold) {
            setShowFloatingBtn(true);
        } else {
            setShowFloatingBtn(false);
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id='projects' className='w-full min-h-screen flex flex-col justify-center items-start 
            relative'>
            
            <button
                onClick={scrollToTop}
                corner-cut="top-right"
                className={`fixed hidden lg:flex title-h4-dark bg-cyan-300  justify-center items-center right-2 
                    bottom-16 w-12 h-16 z-[40] ${showFloatingBtn ? 'visible-btn' : 'hidden-btn'}`}
            >
                <span>UP</span>
            </button>
            <div border-cut="footer-btm"
                className="w-full flex flex-col items-start px-6 sm:px-8 2xl:px-16">
                <Header title='projects' />
                <div className="w flex justify-center relative mt-0 lg:mt-12">
                    <div className='title-h2 relative hidden lg:block'>
                        ⋙ Crafted with Care & a
                        <span className="title-h2-thin ml-4">
                            Dash of Flair.
                        </span><br />
                        ∎ 
                        <span className="title-h2-thin ml-4">
                             Designing every detail 
                        </span>
                        <span className="title-h2 ml-4">
                            to function smoothly & leave a 
                        </span>
                        <span className="title-h2-thin ml-4">
                            lasting impression.
                        </span>
                    </div>
                        

                    <div className='title-h2-mobile relative block lg:hidden whitespace-nowrap'>
                        Crafted with Care & a<br />
                        <span className="title-h2-mobile italic font-[100] whitespace-nowrap">
                            Dash of Flair.
                        </span><br />
                        ∎ designing every<br /> detail to 
                        <span className="title-h2-mobile italic font-[100] ml-2">
                            function<br /> smoothly & leave a<br />
                        </span>
                        lasting impression.
                    </div>
                    
                    
                </div>
                <div className="flex justify-end">
                    <div className="flex gap-32 justyfy-start lg:justify-end mt-8 lg:mt-12">
                        <p className='text-xsmall w-full lg:w-[56%] columns-1 lg:columns-2 gap-[2em]'>
                            Each project is responsive, visually appealing, and optimized for SEO, performance and reliability. <br />
                            Built with the latest web technologies like CSS, JavaScript, ReactJS, NextJS, and APIs.
                            <br /><br />
                            While I'm still early in my career journey, I'm eager to share what I've built so far and continue growing in the field.
                            
                            Explore my projects below and see my passion in action!
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-end ">
                    <ProjectsList />
                </div>
            </div>
        </section>
    );
}

export default Projects;
