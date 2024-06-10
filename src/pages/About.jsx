import React from 'react';
import TextShimmerEffect from '../components/featured/TextShimmerEffect';
import '../assets/css/borders.css';
import ToolTable from '../components/ui/ToolTable';
import CodeIcon from '../components/ui/CodeIcon';

const About = () => {
    return (
        <section
            id="info"
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative pb-20'
        >
            <div className="flex flex-col px-6 2xl:px-16" border-cut="top-and-bottom-about">
                <article className="flex flex-col items-start mt-28 lg:mt-32">
                    <div className="flex justify-between relative">
                        <div className='title-h2 relative'>
                            <TextShimmerEffect text={"⋙ I'm a graphic designer"} />
                            <TextShimmerEffect text={"turned frontend"} />
                            <TextShimmerEffect text={"developer."} />
                            <TextShimmerEffect text={"∎ keenly focused on "} />
                            <TextShimmerEffect text={"translating design "} />
                            <TextShimmerEffect text={"into code."} />
                        </div>

                        <span className="hidden lg:absolute top-[8.5rem] left-[23.5rem] text-zinc-50 text-8xl">
                            <CodeIcon />
                        </span>
                        <span className="hidden lg:absolute top-[6.3rem] left-[26.8rem] text-zinc-50 text-8xl">
                            ⁕
                        </span>

                        <div className="hidden lg:flex flex-col text-right morganite-extra-bold text-[28rem] font-[500] leading-[260px] text-zinc-700 text-opacity-40 absolute -right-[36rem] bottom-10">
                            <span className=''>Info</span>
                        </div>

                        <div className="lg:hidden flex flex-col text-right morganite-extra-bold text-[4rem] lg:text-[26rem] 
                            font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                        <span className='absolute bottom-[10rem] right-56 '>
                            Info
                        </span>                      
                    </div>
                    </div>

                    <div className="flex gap-32 justyfy-start lg:justify-end mt-8 lg:mt-12">
                        <p className='text-xsmall w-full lg:w-[56%] columns-1 lg:columns-2 gap-[2em]'>
                            My love for design fuels my holistic approach, ensuring creativity and precision shine
                            through every project, while navigating the complexities of web development.

                            <br /><br />
                            As a dedicated, self-taught frontend developer specializing in React, I strive to craft
                            smooth animations, engaging transitions, and solve complex layout challenges to create
                            visually stunning and engaging interfaces.
                            <br /><br />
                            When I'm not coding, you'll find me bringing dynamic visuals to life with kinetic typography
                            and web animations.
                            <br />
                            Offline, I'm often doodling, baking yum yums or pumping iron at the gym.
                            <br /><br />
                            Freelancing since 2019, I'm now eager to find full-time dev roles or exciting project collaborations.
                            <br />
                            For inquiries or opportunities, please contact me at
                            <a href='mailto:sandy07r@gmail.com' className='text-zinc-50 ml-1'>info@trishramos.com</a>.
                        </p>
                    </div>
                </article>

                <article className="flex flex-col w-full lg:w-[55%] justify-end mt-8 lg:mt-12 lg:ml-auto relative">
                    <div border-cut="frame-toolkit" className="flex justify-center w-full h-[8%] py-4">
                        <p className='font-grotesk text-xl lg:text-6xl font-[900] text-zinc-50  tracking-widest uppercase'>
                            core tools
                        </p>
                    </div>
                    <div className="flex w-full border-[1px] border-violet-500 bg-violet-500">
                        <p className='text-xxxsmall-black px-2 lg:px-8 py-3'>
                            I value the fundamentals of web development, yet I remain eager to explore new
                            frameworks and solutions that can boost efficiency and productivity. <br />
                            My current toolkit, which is centered around the JAMstack architecture, includes:
                        </p>
                    </div>

                    <div className="flex">
                        <ToolTable />
                    </div>
                </article>
            </div>
        </section>
    );
}

export default About;
