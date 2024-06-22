import React from 'react';
import TextShimmerEffect from '../components/featured/TextShimmerEffect';
import '../assets/css/borders.css';
import ToolTable from '../components/ui/ToolTable';
import CodeIcon from '../components/ui/CodeIcon';
import Header from '../components/ui/Header';
import Tools from '../components/ui/Tools';


const About = () => {
    return (
        <section
            id="info"
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative pb-20'
        >
            <div className="flex flex-col px-6 sm:px-8 2xl:px-16"
                border-cut="top-and-bottom-about">
                
                 <Header title='info' />
                <article className="flex flex-col items-start mt-2 lg:mt-12">
                    <div className="flex justify-between relative">
                        <div className='title-h2 relative hidden lg:block'>
                            ⋙ graphic designer turned <br/>
                            <span className="title-h2-thin">
                                frontend developer. <br/>
                            </span>
                            ∎ focused on translating <br/>
                            <span className="title-h2-thin">
                                design into code.
                            </span>
                        </div>

                        <div className='title-h2-mobile  relative block lg:hidden whitespace-nowrap'>
                            ⋙ graphic designer turned <br/>
                            <span className="title-h2-mobile italic font-[100]">
                                frontend developer. <br/>
                            </span>
                            ∎ focused on translating <br/>
                            <span className="title-h2-mobile italic font-[100]">
                                design into code.
                            </span>
                        </div>

                        <span className="hidden lg:absolute top-[8.5rem] left-[23.5rem] text-zinc-50 text-8xl">
                            <CodeIcon />
                        </span>
                        <span className="hidden lg:absolute top-[6.3rem] left-[26.8rem] text-zinc-50 text-8xl">
                            ⁕
                        </span>                   
                    </div>

                    <div className="flex gap-32 justyfy-start lg:justify-end mt-8 lg:mt-12">
                        <p className='text-xsmall w-full lg:w-[56%] columns-1 lg:columns-2 gap-[2em]'>
                            
                            I'm a self-taught frontend developer specializing<br /> in the React ecosystem.<br />
                            I love creating smooth animations, engaging transitions, and tackling complex
                            layout challenges to build visually stunning and interactive interfaces.
                            <br /><br />
                            As both a designer and developer, I take a holistic approach to my work. I appreciate
                            what goes into crafting beautiful, polished user experiences while navigating the
                            complexities of web development.

                            <br /><br />
                            When I'm not coding, you'll find me bringing dynamic visuals to life with kinetic typography
                            and web animations.
                            <br />
                            Offline, I'm often doodling, baking yum yums or pumping iron at the gym.
                            <br /><br />
                            Freelancing since 2019, I'm now looking for full-time dev roles or exciting project collaborations.
                            <br />
                            For inquiries or opportunities, please contact me at
                            <a href='mailto:sandy07r@gmail.com' className='text-zinc-50 ml-1'>info@trishramos.com</a>.
                        </p>
                    </div>
                </article>

                <article className="flex flex-col w-full lg:w-[56%] justify-end mt-8 lg:mt-4 lg:ml-auto relative">
                    <div className="flex justify-start w-full h-[8%] py-4">
                        <span className='title-h4 tracking-widest uppercase'>
                            My Toolkit
                        </span>
                    </div>
                    <div className="w-full flex flex-col gap-32 justyfy-start lg:justify-end ">
                        <span className='text-xsmall w-full columns-1 lg:columns-2'>
                            I value the fundamentals of web development, yet my focus on clean, efficient,
                            and responsive design drives me to stay eager for the latest 
                            technologies that boost productivity and enhance processes.<br /><br />
                            
                            <p >
                                My current toolkit is centered around the JAMstack architecture (JavaScript, APIs, Markup),
                                enabling the creation of fast, secure, and scalable websites and applications.
                                These are the core tools I use:
                            </p>
                        </span>

                    </div>

                    <div className="flex mt-8 lg:mt-2">
                        <Tools/>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default About;
