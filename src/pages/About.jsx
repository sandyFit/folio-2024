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
                <Header title='info' sectionId='info'/>

                <header className="flex flex-col items-start mt-2 lg:mt-12">
                    <div className="flex justify-between relative">
                        <h2 className='title-h2 relative hidden lg-lg:block'>
                            ⋙ graphic designer turned <br/> 
                            <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full">
                               full stack   
                            </span>
                            <span className="title-h2-thin ml-2">
                                web developer.  <br/>
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
                            graphic designer turned <br />
                            <span className="title-h2-thin whitespace-nowrap 
                                border-[1px] border-zinc-50 px-2 rounded-full">
                                frontend  
                            </span>
                            <span className="title-h2-thin whitespace-nowrap ml-2">
                                developer. <br/>
                            </span>
                            transforming design into<br/> 
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

                <section className="flex flex-col w-full lg-lg:w-[70vw] xl-sm:w-[60vw] xl:w-[58vw] 
                    2xl-sm:w-[52vw] 2xl-xl:w-[50vw] 3xl:w-[56%] justify-end mt-8 lg:mt-4 lg:ml-auto
                    relative">
                    <article className="flex gap-32 justyfy-start xl:justify-end mt-1 lg-lg:mt-8 xl:mt-12">
                        <p className='text-xsmall w-full gap-[2em]'>
                            
                            I'm a self-taught full stack developer with a soft spot for all things
                            React — but honestly, I'm just as excited about what's happening behind
                            the scenes as I am about what users see on screen.
                            <br /><br />
                            My creative side thrives in front-end design, where I get to craft visually
                            stunning, user-friendly interfaces. But I also love rolling up my sleeves and
                            diving into the logic, architecture, and data flow that make everything tick.
                            To me, the real magic happens when beautiful design meets clean, functional
                            code — that sweet spot where things look great and work flawlessly.
                        
                            <br /><br />
                            On top of my dev skills, I bring a background in design, which means I
                            naturally think about how users experience every interaction. I'm all about
                            bridging the gap between pixel-perfect visuals and scalable, maintainable
                            code, making sure every project not only works smoothly but feels amazing to
                            use.
                            <br /><br />
                            Lately, I've also been exploring the world of Generative AI — looking at how
                            tools like AI-powered personalization and automation can take user experiences
                            (and developer productivity) to the next level. It's a whole new playground,
                            and I'm here for it.
                            <br /><br />
                            When I'm not deep in code, you'll probably find me bringing dynamic
                            visuals to life with kinetic typography, web animations, and of course,
                            prompting cutting-edge visual AI tools to push creativity even further.
                            <br />
                            Offline, I'm honing my craft of baking yum yums and pumping iron at the gym.
                            <br /><br />
                            Freelancing since 2021, I'm now looking for full-time dev roles or exciting project
                            collaborations.
                            <br />
                            For inquiries or opportunities, please contact me at
                            <a href='mailto:sandy07r@gmail.com' className='text-zinc-50 ml-1'>
                                info@trishramos.com
                            </a>.
                        </p>
                    </article>

                    <div className="flex justify-start w-full h-[8%] py-4 pt-16">
                        <h3 className='title-h4 text-[var(--secondary)] tracking-widest uppercase'>
                            My Skillset
                        </h3>
                    </div>
                    <article className="w-full flex flex-col gap-32 justyfy-start lg:justify-end ">
                        <p className='text-xsmall w-full '>
                            I prioritize web development fundamentals while maintaining a keen
                            interest in cutting-edge technologies that improve efficiency and productivity.
                            <br /> <br />
                            My toolkit is grounded in Object-Oriented Programming (OOP) principles for the backend,
                            integrated with component-based architecture for the frontend.
                            <br /><br />
                            I also leverage design and prototyping tools, along with no-code solutions, to effectively
                            streamline development processes. <br />


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
