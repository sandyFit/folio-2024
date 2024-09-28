import React, { useEffect, useState } from 'react';
import '../assets/css/borders.css';
import Socials from '../components/ui/Socials';
import Sitemap from '../components/ui/Sitemap';
import Header from '../components/ui/Header';
import { HiOutlineHeart } from 'react-icons/hi2';
import EmailBtn from '../components/buttons/EmailBtn';
import TimeZone from '../components/ui/TimeZone';
import { GlobalContext } from '../utils/globalContext';

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
        <footer id="contact" className='w-full min-h-screen relative flex flex-col'>
            <div className="w-full flex flex-col px-6 md:px-10 base:px-12 xl-sm:px-16 
                flex-grow">
                <Header title='contact' sectionId='contact'/>
                

                <div className="w-full flex flex-col relative flex-grow">               
                    <div className="w-full flex flex-col items-start flex-grow">
                        <section className='w-full grid grid-cols-1 lg-sm:grid-cols-2 grid-rows-2 place-content-center
                             lg-sm:place-content-between flex-grow '>                           
                            <div className="w-full col-start-1">
                                <h2 className="w-full lg-xl:w-[80%] xl:w-[65%] 3xl-sm:w-[50%] text-xxsmall relative  
                                    row-start-2 lg-sm:row-start-1 text-justify -mt-20 lg:-mt-12 lg-sm:mt-3 text-zinc-300">
                                    Whether you need a full-time team member or an extra pair of creative hands for
                                    a project, I'm all ears & hands!
                                    <span className="whitespace-nowrap z-20">
                                        <a href='mailto:sandy07r@gmail.com'
                                            className="relative text-[var(--secondary)] font-[500] after:absolute 
                                                after:-bottom-1 
                                                after:left-0  after:right-0 after:h-[1px] after:w-full after:origin-bottom
                                                after:scale-x-0 after:bg-[var(--secondary)] after:transition-transform
                                                after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                                                hover:after:origin-bottom hover:after:scale-x-100 ml-2">
                                            Let's connect
                                        </a>.
                                    </span>
                                </h2>
                            </div>

                            
                            <div className="w-full lg-sm:col-start-2 row-start-1 flex justify-center lg-sm:justify-end ">
                                <div className="w-full lg-sm:w-[65%] lg-xl:w-[52%] xl:w-[45%] 2xl-lg:w-[40%] :w-[35%] 
                                     mt-[-1.2rem] lg:mt-3 ">
                                    <Socials />
                                </div>
                            </div>
                        </section>

                        <div className='w-full whitespace-nowrap flex flex-col items-center gap-3 lg-sm:gap-12'>
                            {showCopiedText ? (
                                <p className='text-xxsmall text-zinc-500 tracking-widest'>
                                    Email copied!
                                </p>
                            ) : (
                                    <p className='text-xxsmall text-zinc-500 tracking-widest'>
                                    Copy Email
                                </p>
                            )
                        }

                            <div className='flex justify-center w-full text-center mb-12 lg-sm:mb-20'>
                                <EmailBtn handleCopiedText={handleCopiedText} />
                            </div>
                        </div>                                               
                    </div>
                </div>
            </div>

            <article className="w-full flex items-center h-[8rem] lg:h-[7rem] lg-sm:h-[3.6rem] bg-[var(--primaryHover)] 
                px-6 base:px-12 xl:px-16 py-4">
                <div className="grid grid-cols-1 lg-sm:grid-cols-2 lg-xl:grid-cols-3  w-full gap-4 xl:gap-0 
                    mt-2 xl:mt-0">
                    <div className="hidden lg-xl:flex col-span-1 justify-start items-center">
                        <TimeZone />
                    </div>
                        
                    <div className="flex justify-center lg-sm:justify-start lg-xl:justify-center items-center">
                        <Sitemap />
                    </div>

                    <div className="col-span-1 flex justify-center lg-sm:justify-end text-xxsmall w-full 
                        tracking-[.15rem] whitespace-nowrap text-[var(--secondary)] items-center">
                        crafted with <HiOutlineHeart className='mx-1' /> by
                        <a href="#" className="relative text-zinc-200 font-[500] 
                                    after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[1px]
                                    after:w-full after:origin-bottom after:scale-x-0 after:bg-zinc-200
                                    after:transition-transform after:duration-300
                                    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                    hover:after:scale-x-100 ml-1">                         
                            Trish 
                        </a>
                    </div>                  
                </div>
            </article>
        </footer>
    );
}

export default Footer;
