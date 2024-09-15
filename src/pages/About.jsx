import React from 'react';
import '../assets/css/borders.css';
import CodeIcon from '../components/ui/CodeIcon';
import Header from '../components/ui/Header';
import Tools from '../components/ui/Tools';


const About = () => {
    return (
        <section
            id="info"
            className='w-full min-h-screen flex flex-col justify-center items-start relative mb-20'>
            <div
                className="w-full flex flex-col items-start px-6 md:px-10 base:px-12 xl-sm:px-16">
                
                <Header title='info' />
                <header className="flex flex-col items-start mt-2 lg:mt-12">
                    <div className="flex justify-between relative">
                        <h2 className='title-h2 relative hidden lg-lg:block'>
                            ⋙ graphic designer turned <br/> 
                            <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full">
                                frontend  
                            </span>
                            <span className="title-h2-thin ml-2">
                                developer.  <br/>
                            </span>
                            ∎ transforming design into <br/>
                            <span className="title-h2-thin">
                                 interactive
                            </span>
                            <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full mx-3">
                               experiences
                            </span>
                            
                        </h2>

                        <h2 className='title-h2 relative block lg-lg:hidden whitespace-nowrap'>
                            ⋙ graphic designer turned <br />
                            <span className="title-h2-thin whitespace-nowrap 
                                border-[1px] border-zinc-50 px-2 rounded-full">
                                frontend  
                            </span>
                            <span className="title-h2-thin whitespace-nowrap ml-2">
                                developer. <br/>
                            </span>
                            ∎ transforming design into<br/> 
                            <span className="title-h2-thin">
                                  interactive 
                            </span>
                            <span className="title-h2-thin whitespace-nowrap 
                                border-[1px] border-zinc-50 px-2 rounded-full ml-2">
                                experiences<br/> 
                            </span>
                             
                        </h2>

                        <span className="hidden lg:absolute top-[8.5rem] left-[23.5rem] text-zinc-50 text-8xl">
                            <CodeIcon />
                        </span>
                        <span className="hidden lg:absolute top-[6.3rem] left-[26.8rem] text-zinc-50 text-8xl">
                            ⁕
                        </span>                   
                    </div>

                    
                </header>

                <section className="flex flex-col w-full lg-lg:w-[70vw] xl-sm:w-[60vw] xl:w-[58vw] 2xl-sm:w-[52vw] 
                    2xl-xl:w-[50vw] 3xl:w-[56%] justify-end mt-8 lg:mt-4 lg:ml-auto relative">
                    <article className="flex gap-32 justyfy-start xl:justify-end mt-8 xl:mt-12">
                        <p className='text-xsmall w-full columns-1 lg:columns-2 gap-[2em]'>
                            
                            I'm a self-taught frontend developer specializing in the React ecosystem.<br />
                            I love creating smooth animations, engaging transitions, and tackling complex
                            layout challenges to build visually stunning and interactive interfaces.
                            <br /><br />
                            With a background in design, I have a deep understanding on
                            what goes into crafting beautiful, polished user experiences while navigating the
                            complexities of web development.

                            <br /><br />
                            When I'm not coding, you'll find me bringing dynamic visuals to life with kinetic
                            typography and web animations.
                            <br />
                            Offline, I'm honing my craft in handmade soap and staying strong by pumping iron.
                            <br /><br />
                            Freelancing since 2019, I'm now looking for full-time dev roles or exciting project
                            collaborations.
                            <br />
                            For inquiries or opportunities, please contact me at
                            <a href='mailto:sandy07r@gmail.com' className='text-zinc-50 ml-1'>
                                info@trishramos.com
                            </a>.
                        </p>
                    </article>

                    <div className="flex justify-start w-full h-[8%] py-4">
                        <h3 className='title-h4 text-[var(--secondary)] tracking-widest uppercase'>
                            My Skillset
                        </h3>
                    </div>
                    <article className="w-full flex flex-col gap-32 justyfy-start lg:justify-end ">
                        <p className='text-xsmall w-full columns-1 lg:columns-2'>
                            I prioritize foundational web development principles while maintaining a keen
                            interest in cutting-edge technologies that improve efficiency and productivity.
                            <br /><br />
                            My toolkit revolves around the JAMstack architecture (JavaScript, APIs, Markup),
                            enabling me to build websites and applications that are fast, secure, and scalable.<br />
                            Additionally, I leverage design, prototyping tools, and no-code solutions to streamline
                            development processes effectively. <br />
                            These are the core tools I use:

                        </p>

                    </article>

                    <div className="w-full flex mt-8 pb-24">
                        <Tools/>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default About;
