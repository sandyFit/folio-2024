import React, { useEffect, useState } from 'react';
import '../assets/css/borders.css';
import Socials from '../components/ui/Socials';
import { BsCheck, BsCopy } from 'react-icons/bs';
import Sitemap from '../components/ui/Sitemap';
import TimeZone from '../components/ui/TimeZone';
import MotionText from '../components/ui/MotionText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import FooterHeader from '../components/ui/FooterHeader';

const TextNav = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopiedText = () => {
        const emailAddress = 'hello@trishramos.com';
        navigator.clipboard.writeText(emailAddress).then(() => {
            console.log('Email address copied to clipboard!');
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy email address to clipboard:', err);
        });
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Split text into characters
        const title = new SplitType('.title', { types: 'chars' });
        const chars = title.chars;

        // GSAP timeline for scroll animation
        gsap.fromTo(chars,
            { y: 100, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                stagger: 0.05, 
                duration: 1, 
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: "#reach-out",
                    start: "top 80%", // Animation starts when the top of the trigger is 80% from the top of the viewport
                    end: "bottom 20%", // Animation ends when the bottom of the trigger is 20% from the top of the viewport
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <section id="reach-out" border-cut="top-right-black"
            className='w-full min-h-screen bg-zinc-950 relative flex flex-col pt-2'>
            <div className="flex flex-col px-6 sm:px-8 2xl:px-16">
                <div className="flex mt-8">
                    <FooterHeader/>
                </div>

                <div className="flex flex-col mt-1 lg:mt-10 relative flex-grow">
                    <div className="absolute left-0 -top-[2.8rem] w-full h-[2px] bg-zinc-800 transition-all 
                        duration-[var(--duration)] ease-[var(--ease)]"></div>

                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 place-content-between 
                        mt-[-1.8rem]">
                        <div className="col-span-3 row-start-1 lg:row-start-auto lg:col-start-10 flex justify-end ">
                            <Socials />
                        </div>
                        
                        <article className="col-span-3 row-start-2 lg:col-start-1 flex flex-col mr-12
                            items-start uppercase text-zinc-300 mt-4 lg:mt-[-1.2rem]">
                            <span className='w-full text-[.8rem] uppercase text-zinc-400'>
                                Whether you're looking for someone to join your team full-time or just need an extra
                                pair of creative hands for a project — I'm all ears and hands!

                                <a href='mailto:sandy07r@gmail.com' className="relative text-zinc-50 font-[400]
                                    after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full 
                                    after:origin-bottom after:scale-x-0 after:bg-zinc-50 after:transition-transform 
                                    after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                    hover:after:scale-x-100 ml-2">
                                    Let's connect
                                </a>.
                            </span>
                        </article>
                    </div>

                    <button className="relative mt-28  lg:mt-20">
                        <img src="/square-brackets.svg" alt="" className='absolute bottom-24 right-0' />
                        <span className='w-[.9rem] h-[1rem] rounded bg-violet-500 absolute bottom-[6.3rem] right-[.376rem]'></span>
                    </button>

                    <div className="flex flex-col items-start ">
                        <article className='w-[91.5vw] mt-0 lg:mt-52'>
                            <button onClick={handleCopiedText}>
                                <div id='emailAddress' className='med-title lg:hidden mb-0 sm:mb-12'>
                                    <span className='block text-right'>info@</span>
                                    <span className='block text-left'>trishramos</span>
                                    <span className='block text-left'>.com</span>
                                    {isCopied ?
                                        <BsCheck className='text-violet-500 ml-1 mt-5 text-[4.5rem] sm:text-[5rem] absolute 
                                            bottom-0 sm:bottom-9 left-28 sm:left-[8.6rem]' />
                                        :
                                        <BsCopy className='ml-5 mt-10 text-[3rem] sm:text-[3.4rem] absolute bottom-2 
                                            sm:bottom-12 left-28 sm:left-[8.6rem]' />                                    
                                    }
                                </div>
                                <div id='emailAddress' className='hidden lg:flex big-title relative'>
                                    info@trishramos.com
                                    {isCopied ?
                                        <BsCheck className='text-violet-500 ml-1 mt-5 text-[8rem]' />                                       
                                        :
                                        <BsCopy className='ml-5 mt-10 text-[6rem] ' />
                                    }
                                </div>
                            </button>
                        </article>
                    </div>
                </div>
            </div>

            <div className="flex mx-1 mt-auto">

            </div>

            <div className="mt-auto w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center 
                h-[5.5rem] lg:h-[40px] bg-zinc-900 px-6 lg:px-16">
                <div className="flex justify-center w-full lg:w-[18%]">
                    <TimeZone />
                </div>
                <div className="w-full lg:w-[30%] flex justify-center items-center">
                    <MotionText text={'feel free to reach out'} />
                </div>
                <div className="flex justify-center lg:justify-end w-[60%] lg:w-[14%] items-center">
                    <Sitemap />
                </div>
            </div>


        </section>
    );
}

export default TextNav;
