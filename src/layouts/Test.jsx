import React, { useEffect, useState } from 'react';
import '../assets/css/borders.css';
import Socials from '../components/ui/Socials';
import Sitemap from '../components/ui/Sitemap';
import Header from '../components/ui/Header';
import { HiOutlineHeart } from 'react-icons/hi2';
import EmailBtn from '../components/buttons/EmailBtn';
import TimeZone from '../components/ui/TimeZone';


const Footer = () => {
    const [showCopiedText, setShowCopiedText] = useState(false);

    const handleCopiedText = () => {
        const emailAddress = 'info@trishramos.com';

        navigator.clipboard.writeText(emailAddress).then(() => {
            console.log('Email address copied to clipboard!');
            setShowCopiedText(true); // Show "email copied" text
            setTimeout(() => {
                setShowCopiedText(false); // Hide after 1.5 seconds
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy email address to clipboard:', err);
        });
    };

    return (
        <footer id="contact" className='w-full min-h-screen bg-zinc-950 relative flex flex-col'>
            <div border-cut="top-right-black" className="w-full flex flex-col px-6 md:px-10 base:px-12 xl:px-16 flex-grow">
                <Header title='contact'/>

                <div className="w-full flex flex-col relative flex-grow">               
                    <div className="w-full flex flex-col items-start flex-grow">
                        <section className='w-full grid grid-rows-2 flex-grow'>                           
                            <h2 className="w-full xl:w-[35%] text-xxsmall relative row-start-2 xl:row-start-1 text-justify mt-[-4rem] xl:mt-0">
                                Whether you need a full-time team member or an extra pair of creative hands for a project, I'm all ears & hands!
                                <span className="whitespace-nowrap row-start-5 z-20">
                                    <a href='mailto:sandy07r@gmail.com' className="relative text-cyan-300 font-[500] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:bg-cyan-300 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100 xl:ml-2">
                                        Let's connect
                                    </a>.
                                </span>
                            </h2>

                            <div className="w-full flex justify-center xl:justify-end row-start-1">
                                <Socials />
                            </div>
                        </section>

                        <div className='w-full whitespace-nowrap flex flex-col items-center gap-12'>
                            {showCopiedText ? (
                                <p className='ghost-text'>
                                    Email copied!
                                </p>
                            ) : (
                                    <p className='ghost-text'>
                                    Copy Email
                                </p>
                            )
                        }

                            <div className='flex justify-center w-full text-center mb-20'>
                                <EmailBtn handleCopiedText={handleCopiedText} />
                            </div>
                        </div>                                               
                    </div>
                </div>
            </div>

            <article className="w-full h-[8rem] lg:h-[7rem] xl:h-[3.5rem] bg-zinc-900 px-6 xl:px-16 py-4">
                <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-4 xl:gap-0 mt-2 xl:mt-0">
                    <div className="hidden xl:flex col-span-1 justify-start ">
                        <TimeZone />
                    </div>
                        
                    <div className="col-span-1 flex justify-center">
                        <Sitemap />
                    </div>

                    <div className="col-span-1 flex justify-center xl:justify-end text-xxsmall-cyan tracking-[.15rem] whitespace-nowrap">
                        crafted with <HiOutlineHeart className='mx-1 mt-1' /> by
                        <a href="#" className='text-xxsmall-white tracking-wide xl:tracking-[.15rem] ml-1 underline underline-offset-4'>                           
                            Trish R
                        </a>.
                    </div>                  
                </div>
            </article>
        </footer>
    );
}

export default Footer;
