import React, { useState } from 'react';
import TextShimmerEffect from '../components/featured/TextShimmerEffect';
import ProjectsList from '../layouts/ProjectsList';
import HappyFace from '../components/ui/HappyFace';
import Header from '../components/ui/Header';

const Projects = () => {
    


    return (
        <section id='projects'         
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative '>
            <div className="w-full flex flex-col items-start px-6 sm:px-8 2xl:px-16 "
                border-cut="footer-btm">     
                
                <Header title='projects' />
                
               <div className="flex justify-center relative mt-16 lg:mt-16 ">
                    <div className='title-h2 relative '>                      
                        Crafted with Care & a
                        <span className="title-h2-thin ml-4 ">
                            Dash of Flair.                      
                        </span><br/>
                        ∎ My aim is to design every detail to <br/>
                        <span className="title-h2-thin mr-4">
                            function smootly & leave a
                        </span>
                        lasting impression.
                    </div>

                    <div className="hidden lg:absolute top-[8.2rem] left-[28.5rem]">
                        <HappyFace />
                    </div>
                    
                    
                    <span className='hidden lg:absolute top-[6.2rem] left-[32rem] text-zinc-50 text-8xl'>
                        ⁕
                    </span>
                        
                    
                    
                    {/* <div className="hidden lg:flex flex-col text-right morganite-extra-bold text-[4rem] 
                        lg:text-[26rem] font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                        <span className='absolute bottom-[5.4rem] -right-[36rem] '>
                            Work
                        </span>                      
                    </div> */}

                    <div className="lg:hidden flex flex-col text-right morganite-extra-bold text-[4rem] sm:text-[5rem]
                        lg:text-[26rem] font-[500] leading-[130px] text-zinc-700 text-opacity-40 ">                   
                        <span className='absolute bottom-[12rem] sm:bottom-[13.8rem] left-0'>
                            Work
                        </span>                      
                    </div>
                </div>

                <div className="flex  justify-end">
                    <div className="flex gap-32 justyfy-start lg:justify-end mt-8 lg:mt-12">
                        <p className='text-xsmall w-full lg:w-[56%] columns-1 lg:columns-2 gap-[2em]'>
                            Each project is responsive, visually appealing, and optimized for SEO, performance and
                            reliability. <br/>
                            Built with the latest web
                            technologies like CSS, JavaScript, ReactJS, NextJS, and APIs.
                            <br/>
                            

                            While I'm still early in my career journey, I'm eager to share what I've built so far
                            and continue growing in the field.
                            <br/>
                            check out my projects below.
                        </p>                  
                                       
                    </div>

                </div>

                <div className="w-full flex justify-end mt-8">
                    <ProjectsList/>
                </div>
            </div>                                   
        </section>
    );
}

export default Projects;
