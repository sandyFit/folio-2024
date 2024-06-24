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
        <section id='projects'
            className='w-full min-h-screen flex flex-col justify-center items-start relative'>
            
            <button
                onClick={scrollToTop}
                
                className={`fixed hidden lg:flex title-h4-dark top-left-btn justify-center items-center right-2 
                    bottom-80 w-12 h-[4.5rem] pt-1 z-[40] group 
                    ${showFloatingBtn ? 'visible-btn' : 'hidden-btn'}`}
            >
                <span className={`duration-700 [transition-delay:.02] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-cyan-900`}>U</span>
                <span className={`duration-700 [transition-delay:.04] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-cyan-900`}>P</span>
            </button>

            <div border-cut="footer-btm"
                className="w-full flex flex-col items-start px-6 md:px-10 base:px-12 2xl:px-16">
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
                        ⋙ Crafted with Care <br />
                        <span className="title-h2-mobile italic font-[100] whitespace-nowrap">
                            & a Dash of Flair.
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
                        <p className='text-xsmall w-full lg:w-[56%] columns-1 lg:columns-2 '>
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
