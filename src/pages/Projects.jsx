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
            border-cut="footer-btm"
            className='w-full min-h-screen flex flex-col relative'>
            <button
                onClick={scrollToTop}
                className={`fixed hidden xl-sm:flex title-h4-dark top-left-btn justify-center items-center right-2 
                    bottom-80 w-10 h-[4rem] 2xl-xl:w-12 2xl-xl:h-[4.5rem] pt-1 z-[40] group 
                    ${showFloatingBtn ? 'visible-btn' : 'hidden-btn'}`}
            >
                <span className={`duration-700 [transition-delay:.02] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-cyan-900`}>U</span>
                <span className={`duration-700 [transition-delay:.04] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-cyan-900`}>P</span>
            </button>

            <div className="w-full flex flex-col px-6 md:px-10 base:px-12 xl-sm:px-16">
                <Header title='projects' />
                <article className="w-full flex justify-start relative mt-0 lg:mt-12">
                    <div className='title-h2 relative hidden lg-lg:block'>
                        ⋙ Crafted with Care & a
                        <span className="title-h2-thin ml-4">Dash of Flair.</span><br />
                        ∎ 
                        <span className="title-h2-thin">Designing </span>
                        <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full">
                                every detail
                            </span>
                        <span className="title-h2 lg-lg:ml-1 lg-xl:ml-2">to function<br /> smoothly & leave a </span>
                        <span className="title-h2-thin ml-1">lasting impression.</span>
                    </div>

                    <div className='title-h2 relative block lg-lg:hidden whitespace-nowrap'>
                        ⋙ Crafted with Care & a <br />
                        <span className="title-h2-thin italic font-[100] whitespace-nowrap">
                            Dash of Flair.
                        </span><br />
                        ∎ designing every detail to <br />
                        <span className="title-h2-thin italic font-[100] whitespace-nowrap">function</span>
                        <span className="title-h2-thin italic font-[100] border-[1px] border-zinc-50 px-2
                            whitespace-nowrap rounded-full ml-2">
                                 smoothly
                        </span>
                            <span className="title-h2-thin italic font-[100] whitespace-nowrap ml-1">&</span><br />
                        <span>leave a lasting impression.</span>
                       
                    </div>
                </article>

                <article className="flex flex-col items-end mt-8 lg:mt-12 lg-lg:w-[70vw] xl-sm:w-[60vw] xl:w-[58vw] 
                    2xl-sm:w-[52vw] 2xl-xl:w-[50vw] 3xl:w-[56%] lg-lg:ml-auto">
                    <div className="flex gap-32 justify-start lg-lg:justify-end w-full">
                        <p className='text-xsmall w-full columns-1 lg:columns-2'>
                            Each project is responsive, visually appealing, and optimized for SEO, performance and reliability. <br />
                            Built with the latest web technologies like CSS, JavaScript, ReactJS, NextJS, and APIs.
                            <br /><br />
                            While I'm still early in my career journey, I'm eager to share what I've built so far and continue growing in the field.
                            Explore my projects below and see my passion in action!
                        </p>
                    </div>
                    <div className="w-full">
                        <ProjectsList />
                    </div>
                </article>
            </div>
        </section>

    );
}

export default Projects;
