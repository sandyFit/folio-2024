import React, { useState } from 'react';
import TextShimmerEffect from '../components/featured/TextShimmerEffect';
import ProjectsList from '../layouts/ProjectsList';
import HappyFace from '../components/ui/HappyFace';

const Projects = () => {
    


    return (
        <section id='work' data-cursor-color='#d946ef'         
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative'>
            <div className="w-full flex flex-col items-start px-6 2xl:px-16" border-cut="footer-btm">                    
               <div className="flex justify-between relative mt-28 lg:mt-32">
                    <div className='title-h2 relative '>
                        <TextShimmerEffect text={"⋙ These projects are"}/>
                        <TextShimmerEffect text={"Crafted with Care & a"}/>
                        <TextShimmerEffect text={"Dash of Flair. "} />                     
                        <TextShimmerEffect text={"∎ My aim is to design"}/>
                        <TextShimmerEffect text={"every detail to function"}/>
                        <TextShimmerEffect text={"smootly & leave a"}/>
                        <TextShimmerEffect text={"lasting impression."}/>
                    </div>

                    <div className="absolute top-[8.2rem] left-[28.5rem]">
                        <HappyFace />
                    </div>
                    
                    
                    <span className='absolute top-[6.2rem] left-[32rem] text-zinc-50 text-8xl'>
                        ⁕
                    </span>
                        
                    
                    
                    <div className="hidden lg:flex flex-col text-right morganite-extra-bold text-[4rem] lg:text-[26rem] font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                        <span className='absolute bottom-[5.4rem] -right-[36rem] '>
                            Work
                        </span>                      
                    </div>

                    <div className="lg:hidden flex flex-col text-right morganite-extra-bold text-[4rem] lg:text-[26rem] font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                        <span className='absolute bottom-[12rem] right-52 '>
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
                            Hosted on AWS and Vercel.
                            <br/><br/>
                            While I'm still early in my career journey, I'm eager to share what I've built so far
                            and continue growing in the field.
                            <br/>
                            I'm thrilled to share what I can do, check it out below.
                        </p>                  
                                       
                    </div>

                </div>

                <div className="w-full flex justify-end">
                    <ProjectsList/>
                </div>
            </div>                                   
        </section>
    );
}

export default Projects;
