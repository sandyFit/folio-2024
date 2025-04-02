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
                                 things you can
                            </span>
                            <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full mx-3">
                               click on
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
                                  things you can 
                            </span>
                            <span className="title-h2-thin whitespace-nowrap 
                                border-[1px] border-zinc-50 px-2 rounded-full ml-2">
                                click on<br/> 
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
                            
                            I'm a self-taught full stack developer, with a soft spot for all things React.
                            
                            My design background means I'm a natural at making things look pretty on the
                            frontend.
                            But I also love diving into the logic, architecture, and data
                            flow that make it all work behind the scenes.
                            Basically, I'm all about making sure a project isn't just a pretty face,
                            but actually works.                                                
                            
                            <br /><br />
                            My current obssession? Generative AI. I'm all in trying to figure out if it 
                            can actually improve UX and developer workflows.
                            It's a whole new playground, and I'm here to see if I can break it
                            (or maybe make something cool).

                            <br /><br />
                            Off duty, I freely experiment with micro-animations and explore 
                            human-AI collaboration to indulge my creativity.
                            Off-screen, I'm busy making sure my quads don't forget who's boss.
                            
                            <br /><br />
                            Been freelancing since 2021, and now I'm on the hunt for a full-time dev gig
                            or some projects that won't make me question my life choices.
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
                            Web development fundamentals are my jam. But I also keep up with
                            state-of-the-art technologies that boost productivity and make life easier.
                            <br /> <br />
                            <span className='font-bold'>My Toolkit</span>:
                            MVC-inspired backend (because legacy), component-driven frontend (because React), and
                            no-code because deadlines are a thing.
                            <br />
                            Design tools? Sure. Cloud hosting? Obviously. Testing? Always. (Mostly.)
                            <br />

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
