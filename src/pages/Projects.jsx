import React, { useEffect, useState } from 'react';
import ProjectsList from '../layouts/ProjectsList';
import HappyFace from '../components/ui/HappyFace';
import Header from '../components/ui/Header';
import { animateScroll as scroll } from 'react-scroll';
import SeeMore from '../components/buttons/SeeMore';
import BottomLeftOutlineBtn from '../components/buttons/BottomLeftOutlineBtn';
import TopRightOutline from '../components/buttons/TopRightOutline';
import SeeMoreSmall from '../components/buttons/SeeMoreSmall';

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
                        
                        ⋙ A carefully curated collection of  <br />
                        <span className="title-h2-thin ">
                            projects I've managed to 
                        </span>
                        <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full ml-4">
                            build
                        </span><br/>
                        
                        <span className="title-h2">(And they might do something!)</span>
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
 
                <section className="w-full flex flex-col items-end mt-8 lg:mt-12 lg-lg:ml-auto">
                   
                    <div className="w-full relative flex items-end">
                        <div className="flex w-full">                                                 
                            <div className="w-full flex flex-col items-start pt-3 2xl-xl:pt-5">
                                <div className="w-full flex justify-center">                                            
                                    <video width='800' height='100%' controls className="w-full">
                                        <source src="/videos/FoodSaver.mp4" type="video/mp4"></source>
                                    </video>                                           
                                </div>                                       
                            </div>                        
                        </div>
                    </div>
                    <aside className='w-full flex justify-between'>                       
                        <p className='text-xxsmall text-white'>
                            FoodSaver is a tool for managing household food inventory, making
                            smarter meal choices, and reducing waste. This app helps you to take
                            control of your pantry, making environmentally friendly and
                            cost-effective decisions.
                        </p>
                        <div className="w-full flex justify-end relative gap-1">
                            <BottomLeftOutlineBtn />
                            <TopRightOutline />
                        </div> 
                    </aside>
                </section>
            </div>
        </section>

    );
}

export default Projects;
