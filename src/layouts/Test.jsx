import React, { useEffect, useState } from 'react';
import '../assets/css/borders.css';
import Socials from '../components/ui/Socials';
import { BsCheck, BsCopy } from 'react-icons/bs';
import Sitemap from '../components/ui/Sitemap';
import TimeZone from '../components/ui/TimeZone';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

import Header from '../components/ui/Header';
import { HiOutlineHeart } from 'react-icons/hi2';

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
        <section id="contact" 
            className='w-full min-h-screen bg-zinc-950 relative flex flex-col'>
            
            <div border-cut="top-right-black"
                className="flex flex-col px-6 sm:px-8 2xl:px-16">
                <Header title='reach out'/>

                <div className="flex flex-col mt-1 lg:mt-10 relative flex-grow">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 place-content-between mt-[-1.8rem]">
                        <div className="col-span-3 row-start-1 lg:row-start-auto lg:col-start-10 flex justify-end">
                            <Socials />
                        </div>
                        
                        <article 
                            className="grid grid-cols-12 relative">
                            {/* <h1 className='big-title2 col-span-6 col-start-1 row-start-7 '>
                            trish ramos
                            </h1> */}
                            <span className='title-h3 col-span-4 col-start-6 row-start-2 mt-40 whitespace-nowrap'>
                                ⋙ frontend developer with a <br/>sharp  eye for design.<br/>
                                ∎ currentry seeking  opportunities                   
                            </span>
                            <span className='title-h3-thin col-span-4 col-start-6 row-start-3 z-10 whitespace-nowrap'>
                                to innovate & collaborate on web
                            </span>
                            <span className='title-h3 col-span-4 col-start-6 row-start-4  whitespace-nowrap'>
                            development projects.                   
                            </span>

                            <span className='text-xxsmall col-span-1 col-start-6 row-start-5 place-self-start mt-36 whitespace-nowrap'>
                                based in <span className='text-xxsmall-white ml-1.5'> colombia</span>
                            </span>
                            <span className='text-xxsmall col-span-1 col-start-6 row-start-7 place-self-start whitespace-nowrap'>
                                <TimeZone/>
                            </span>
                            <span className='absolute -bottom-24 left-[36.5rem] flex justify-center text-xxsmall-white'>
                                    <span className='right-60'>[<ScrollBtn />]</span>
                                </span>


                            <div className="grid w-[22rem] col-span-2 col-start-2 row-start-1 row-end-12 mt-32">
                                <img src="/img/me-bn.png" alt="" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <article className="mt-auto w-full h-[5.5rem] lg:h-[3rem] bg-zinc-900 px-6 lg:px-16 flex items-center">
                <div className="grid grid-cols-12 w-full place-content-between">
                    <div className="col-span-2 col-start-1 flex items-center">
                        <TimeZone />
                    </div>
                    <div className="col-span-2 col-start-6 flex items-center justify-center">
                        <Sitemap />
                    </div>
                    <div className="col-span-3 col-start-10 flex items-center justify-end text-xxsmall">
                        crafted with <HiOutlineHeart className='mx-1 mt-[1px]' /> by
                        <a href="#"
                            className='text-xxsmall-white underline ml-1'>                           
                            yours truly
                        </a>.
                    </div>
                </div>
            </article>
        </section>
    );
}

export default TextNav;

