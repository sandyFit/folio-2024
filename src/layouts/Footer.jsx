import React, { useEffect, useState } from 'react';
import '../assets/css/borders.css';
import Socials from '../components/ui/Socials';
import Sitemap from '../components/ui/Sitemap';
import Header from '../components/ui/Header';
import { HiOutlineHeart } from 'react-icons/hi2';
import EmailBtn from '../components/buttons/EmailBtn';


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
                className="flex flex-col px-6 md:px-10 base:px-12 xl:px-16">
                <Header title='contact'/>

                <div className="flex flex-col mt-1 lg:mt-12 relative flex-grow">               
                    <div className="flex flex-col items-start">
                        <article className='w-full grid place-content-start'>
                            <div className="hidden lg-lg:grid grid-cols-12 relative">
                                <span className="title-h2 col-span-12 col-start-1 row-start-1 whitespace-nowrap">
                                    ⋙ wheather you need a full-time team
                                </span>
                                <span className="title-h2-thin col-span-12 col-start-1 row-start-2 whitespace-nowrap">
                                    member or just an extra pair of
                                </span>
                                <span className="title-h2 col-span-12 col-start-1 row-start-3 whitespace-nowrap">
                                    creative hands for a project — I'm all
                                </span>
                                <span className="title-h2-thin col-span-12 col-start-1 row-start-4 whitespace-nowrap">
                                    ears & hands! 
                                    <a href="mailto:sandy07r@gmail.com"
                                        className="relative text-cyan-300 font-[400] after:absolute after:bottom-0 
                                        after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom
                                        after:scale-x-0 after:bg-cyan-300 after:transition-transform
                                        after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                                        hover:after:origin-bottom hover:after:scale-x-100 not-italic
                                        ml-4">
                                        Let's connect
                                    </a>.
                                </span>
                            </div>

                            <div className="grid lg-lg:hidden grid-cols-1 relative title-h2-mobile whitespace-nowrap">
                                <span className='title-h2-mobile col-span-1 col-start-1 row-start-1
                                    whitespace-nowrap'>
                                    ⋙ wheather you need a full <br/>                                        
                                </span>
                                <span className='title-h2-mobile font-[100] italic col-span-1 row-start-2 whitespace-nowrap'>
                                    time team member or just                                
                                </span>                              
                                <span className='title-h2-mobile col-span-1 row-start-3 whitespace-nowrap'>
                                      an extra pair of creative <br/> 
                               </span>    
                                <span className='title-h2-mobile font-[100] italic col-span-1 col-start-1 row-start-4
                                     whitespace-nowrap'>
                                    hands for a project —  I'm
                                </span>
                                <span className='title-h2-mobile col-span-1 col-start-1 row-start-5
                                    whitespace-nowrap'>
                                    all ears!
                                </span>
                                <span className='title-h2-mobile row-start-5 ml-20 md:ml-[6.5rem] lg:ml-2 lg-md:ml-[-6rem]
                                    z-20 whitespace-nowrap'>
                                    <a href='mailto:sandy07r@gmail.com' className="relative text-cyan-300 font-[400]
                                        after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] 
                                        after:w-full 
                                        after:origin-bottom after:scale-x-0 after:bg-cyan-300 after:transition-transform 
                                        after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                                        hover:after:origin-bottom hover:after:scale-x-100">
                                        Let's connect
                                    </a>.
                                </span>
                            </div>
                            <span className='w-full col-span-8 row-start-4 mt-20 md:mt-16 base:mt-12 xl:mt-16 z-30 flex 
                                md:justify-center whitespace-nowrap'>
                                <span className='relative'>
                                    <EmailBtn/>                                   
                                </span>
                            </span>                                                    
                        </article>
                    </div>
                </div>
            </div>

            <article className="mt-auto w-full h-[6rem] lg:h-[7rem] xl:h-[3rem] bg-zinc-900 px-6 xl:px-16 py-4
                grid place-content-center">
                <div className="grid grid-cols-1 xl:grid-cols-12 w-full place-content-between gap-2 xl:gap-0">
                    <div className="col-span-1 xl:col-span-3 col-start-1 row-start-3 xl:row-start-1 flex 
                        justify-start">
                        <Socials />
                    </div>
                    
                    <div className="col-span-1 xl:col-span-3 col-start-1 xl:col-start-6 flex items-center 
                        justify-center xl:justify-start text-xxsmall-cyan tracking-[.15rem] whitespace-nowrap">
                        crafted with <HiOutlineHeart className='mx-1 mt-[.5px]' /> by
                        <a href="#"
                            className='text-xxsmall-white tracking-wide xl:tracking-[.15rem] ml-1 underline 
                                underline-offset-4'>                           
                            yours truly
                        </a>
                    </div>
                    <div className="hidden xl:flex xl:col-span-3 col-start-1 xl:col-start-11 row-start-1
                        justify-start lg:justify-end ml-6 ">
                        <Sitemap />
                    </div>
                </div>
            </article>
        </section>
    );
}

export default TextNav;

