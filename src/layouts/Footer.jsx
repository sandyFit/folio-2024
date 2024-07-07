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
                className="w-full flex flex-col px-6 md:px-10 base:px-12 xl:px-16">
                <Header title='contact'/>

                <div className="w-full flex flex-col mt-1 lg:mt-12 relative flex-grow">               
                    <div className="w-full flex flex-col items-start">
                        <article className='w-full grid'>
                            <div className="w-full hidden lg-lg:block relative">
                                <span className="title-h2  whitespace-nowrap">
                                    ⋙ wheather you need a full-time <br/>
                                </span>
                                <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full 
                                    whitespace-nowrap ">
                                    team member
                                </span>
                                <span className="title-h2-thin whitespace-nowrap lg-lg:ml-1 lg-xl:ml-2">
                                     or just an 
                                </span>
                                of
                                <span className="title-h2-thin border-[1px] border-zinc-50 px-3 rounded-full 
                                    whitespace-nowrap ">
                                    extra pair <br/>
                                </span>
                                
                                <span className="title-h2 whitespace-nowrap">
                                    of creative hands for a project — I'm <br/>
                                </span>
                                <span className="title-h2-thin  whitespace-nowrap">
                                    all ears & hands! 
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

                            <div className="flex lg-lg:hidden relative flex-col">
                                <div className="title-h2">
                                    ⋙ whether you need a full
                                </div>
                                <div className=" title-h2-thin whitespace-nowrap">
                                    time
                                    <span className="whitespace-nowrap title-h2-thin border-[1px] 
                                        border-zinc-50 px-2 rounded-full ml-1">
                                        team member
                                    </span>
                                    <span className="whitespace-nowrap title-h2-thin ml-1">
                                        or just
                                    </span>
                                </div>
                                <div className="whitespace-nowrap title-h2">
                                    an extra pair of creative
                                </div>
                                <div className="whitespace-nowrap title-h2-thin">
                                    hands for a 
                                    <span className="whitespace-nowrap title-h2-thin border-[1px] 
                                        border-zinc-50 px-2 rounded-full ml-1">
                                        project
                                    </span>
                                    <span className="whitespace-nowrap title-h2 ml-1">
                                         — I'm
                                    </span>
                                </div>
                                <div className="whitespace-nowrap title-h2">
                                    all ears!
                                    <span className="whitespace-nowrap title-h2 row-start-5 ml-3 md:ml-[1.2rem] 
                                        lg:ml-3 lg-md:ml-[1rem] z-20">
                                        <a href='mailto:sandy07r@gmail.com' className="relative text-cyan-300 font-[400]
                                            after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] 
                                            after:w-full after:origin-bottom after:scale-x-0 after:bg-cyan-300 after:transition-transform 
                                            after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                                            hover:after:origin-bottom hover:after:scale-x-100">
                                            Let's connect
                                        </a>.
                                    </span>
                                </div>
                            </div>

                            <span className='w-full mt-20 md:mt-16 base:mt-12 xl:mt-16 z-30 whitespace-nowrap'>
                                <span className='flex justify-center w-full text-center'>
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

