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
            className='w-full min-h-screen flex flex-col relative mb-12'>
            <button
                onClick={scrollToTop}
                className={`fixed hidden xl-sm:flex title-h4-xs top-left-btn justify-center items-center right-4 
                    2xl-xl:right-3 3xl:right-2
                    bottom-80 w-10 h-[4rem] 2xl-xl:w-12 2xl-xl:h-[4.5rem] pt-1 z-[40] bg-[var(--secondary)] group 
                    ${showFloatingBtn ? 'visible-btn' : 'hidden-btn'}`}
            >
                <span className={`duration-700 [transition-delay:.02] text-[var(--primary)] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-[var(--primaryHover)]`}>U</span>
                <span className={`duration-700 [transition-delay:.04] text-[var(--primary)] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-[var(--primaryHover)]`}>P</span>
            </button>

            <div className="w-full flex flex-col px-6 md:px-10 base:px-12 xl-sm:px-16">
                <Header title='projects' sectionId='projects'/>
                <header className="w-full flex justify-start relative mt-0 lg:mt-12">
                    <h2 className='title-h2 relative hidden lg-lg:block'>

                        ⋙ Each project reflects a <br/>
                        <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full mr-2">
                            meticulous   
                        </span>
                        <span className="title-h2-thin ">
                            approach to
                        </span><br/>
                        <span className="title-h2">detail-oriented development.</span>
                    </h2>

                    <h2 className='title-h2 relative block lg-lg:hidden whitespace-nowrap'>
                        Each project reflects a<br />                       
                        <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full mr-2">
                             meticulous   
                        </span>
                        <span className="title-h2-thin ">
                            approach 
                        </span><br/>
                        <p className="title-h2"> to detail-oriented </p>
                       <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full">
                            development  
                        </span>.
                    </h2>
                </header>

                <section className="flex flex-col items-end mt-8 lg:mt-12 lg-lg:w-[70vw] xl-sm:w-[60vw] xl:w-[58vw] 
                    2xl-sm:w-[52vw] 2xl-xl:w-[50vw] 3xl:w-[56%] lg-lg:ml-auto">
                    <div className="flex gap-32 justify-start lg-lg:justify-end w-full">
                        <p className='text-xsmall w-full columns-1 lg:columns-2'>
                            {/* Each project is responsive, visually appealing, and optimized for SEO, performance and reliability. <br />
                            While I'm still early in my career journey, I'm eager to share what I've built so far and continue growing in the field. 
                            Explore my work below and see how I bring design concepts to life through code.*/}
                        </p>
                    </div>
                    <div className="w-full">
                        <ProjectsList />
                    </div>
                </section>
            </div>
        </section>

    );
}

export default Projects;
