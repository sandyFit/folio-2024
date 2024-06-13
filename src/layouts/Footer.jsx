import React, { useEffect, useState } from 'react';
import '../assets/css/borders.css';
import Socials from '../components/ui/Socials';
import { BsCheck, BsCheck2, BsCopy } from 'react-icons/bs';
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

    

    return (
        <section id="contact" 
            className='w-full h-screen bg-zinc-950 relative flex flex-col'>
            
            <div border-cut="top-right-black"
                className="flex flex-col px-6 sm:px-8 2xl:px-16">
                <Header title='contact'/>

                <div className="flex flex-col mt-1 lg:mt-12 relative flex-grow">
                
                    <div className="flex flex-col items-start">
                        <article className='grid place-content-start'>
                            <div className="hidden lg:grid grid-cols-12 relative ">
                                <span className='title-h2 col-span-12 col-start-1 row-start-1  whitespace-nowrap'>
                                    ⋙ Whether you're looking for someone<br/> 
                                                
                                </span>
                                <span className='title-h2-thin col-span-12 col-start-1 row-start-2 whitespace-nowrap'>
                                    to join your team full-time or just
                                    
                                </span>
                                <span className='title-h2 col-span-12 col-start-1 row-start-3 whitespace-nowrap'>
                                    need an extra pair of creative hands for
                                </span>
                                <span className='title-h2-thin col-span-12 col-start-1 row-start-4 whitespace-nowrap'>
                                    a project — I'm all ears and hands!
                                </span>
                                <span className='title-h2 col-span-12 col-start-1 row-start-5 z-20 whitespace-nowrap'>
                                    <a href='mailto:sandy07r@gmail.com' className="relative text-cyan-300 font-[400]
                                        after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full 
                                        after:origin-bottom after:scale-x-0 after:bg-cyan-300 after:transition-transform 
                                        after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                                        hover:after:origin-bottom hover:after:scale-x-100">
                                        Let's connect
                                    </a>.
                                </span>
                            </div>

                            <div className="grid lg:hidden grid-cols-12 relative">
                                <span className='title-h2-mobile col-span-12 col-start-1 row-start-1  
                                    whitespace-nowrap'>
                                    ⋙ Whether you're looking<br/> for someone to join your                                              
                                </span>
                                <span className='title-h2-mobile font-[100] italic col-span-12 
                                    row-start-2 whitespace-nowrap'>
                                    team full-time or just
                                    
                                </span>
                                <span className='title-h2-mobile col-span-12 col-start-1 row-start-3 whitespace-nowrap'>
                                    need an extra pair of <br/>creative hands for a
                                </span>
                                <span className='title-h2-mobile font-[100] italic col-span-12 col-start-1 row-start-4 whitespace-nowrap'>
                                    project — I'm all ears and <br/>hands!
                                </span>
                                <span className='title-h2-mobile col-span-12 col-start-1 row-start-5 z-20 whitespace-nowrap'>
                                    <a href='mailto:sandy07r@gmail.com' className="relative text-cyan-300 font-[400]
                                        after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full 
                                        after:origin-bottom after:scale-x-0 after:bg-cyan-300 after:transition-transform 
                                        after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                                        hover:after:origin-bottom hover:after:scale-x-100">
                                        Let's connect
                                    </a>.
                                </span>
                            </div>
                            <span className='col-span-8 col-start-1 row-start-4 mt-16 z-30 whitespace-nowrap'>
                                {/* <span className='hidden lg:block'>copy email</span> */}
                                <span className='ml- relative'>
                                    <button onClick={handleCopiedText}>
                                        <div id='emailAddress' className='title-h4 flex whitespace-nowrap justify-center'>
                                            info@trishramos.com
                                            {isCopied ?
                                                <BsCheck2 className='flex text-cyan-300 text-2xl lg:text-[2.8rem] 
                                                    mt-3 lg:mt-5 ml-2 lg:ml-4' />
                                                :
                                                <BsCopy className='ml-2 lg:ml-5 mt-2 lg:mt-4 text-2xl lg:text-[2.6rem]' />
                                            }
                                        </div>
                                    </button>
                                </span>
                            </span>
                            
                                                     
                        </article>
                    </div>
                </div>
            </div>

            <article className="mt-auto w-full h-[7.5rem] lg:h-[3rem] bg-zinc-900 px-6 lg:px-16 flex items-center">
                <div className="grid grid-cols-12 w-full place-content-between gap-2 lg:gap-0">
                    <div className="col-span-12 lg:col-span-3 col-start-1 flex items-center">
                        <Socials />
                    </div>
                    
                    <div className="col-span-12 lg:col-span-3 col-start-1 lg:col-start-6 flex items-center justify-center 
                        text-xxsmall whitespace-nowrap">
                        crafted with <HiOutlineHeart className='mx-1 mt-[1px]' /> by
                        <a href="#"
                            className='text-xxsmall-white ml-1 underline'>                           
                            yours truly
                        </a>
                    </div>
                    <div className="col-span-8 lg:col-span-2 col-start-3 lg:col-start-11 flex 
                    items-center  justify-center lg:justify-end">
                        <Sitemap />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default TextNav;

