import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../assets/css/borders.css';
import HeroBtn from '../components/buttons/HeroBtn';
import ScrollBtn from '../components/buttons/ScrollBtn';
import TextShimmerHero from '../components/featured/TextShimmerHero';
import TimeZone from '../components/ui/TimeZone';
import Sitemap from '../components/ui/Sitemap';
import { HiOutlineHeart } from 'react-icons/hi2';

const Hero = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const initialTimeline = gsap.timeline({ defaults: { ease: "power3.out", duration: 2.5, delay: 0.5 } });
        initialTimeline.fromTo('.small-title', { opacity: 0 }, { opacity: 1, stagger: 0.5, delay: 1.5 });
        initialTimeline.fromTo('.turning-text', { rotateY: '0deg' }, { rotateY: '360deg', ease: "power3.inOut" });

        const overlayTimeline = gsap.timeline();
        overlayTimeline.to('.overlay-first', { duration: 1, left: '-100%', ease: "power3.inOut" });
        overlayTimeline.to('.overlay-second', { duration: 1, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#index",
                start: "top top",
                end: "bottom top",
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        scrollTimeline.to('.hero-content', { opacity: 0, duration: 0.5 });

        const heroTitle = new SplitType('.hero-title', { types: 'chars' });
        const chars = heroTitle.chars;
        gsap.fromTo(chars, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 2, ease: 'power4.out' });

        return () => {
            initialTimeline.kill();
            overlayTimeline.kill();
            scrollTimeline.kill();
        };
    }, []);

    return (
        <section id="index"
            className='w-full min-h-screen flex flex-col bg-zinc-950 relative px-6 sm:px-8 md:px-12 
                2xl:px-16'>

            {/* <div className="absolute left-16 top-[6.5rem] w-[92%] h-[2px] bg-zinc-800 transition-all 
                            duration-[var(--duration)] ease-[var(--ease)]"></div> */}
            <div border-cut="bottom-right-black" className="grid">

                <div className="flex flex-col mt-1 lg:mt-36 relative flex-grow">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 place-content-between ">
                        
                        
                        <article className="col-span-3 row-start-2 lg:col-start-1 flex flex-col mr-12
                            items-start uppercase text-zinc-300 mt-4 lg:mt-[-1.2rem]">
                            <span className='w-full text-[.8rem] uppercase text-zinc-400'>
                                Designer & Developer based in colombia. Currently
                                seeking roles or opportunities to innovate & collaborate in web development projects.

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
               
                    <div className="grid items-start mt-60">
                        <article className='grid grid-cols-12'>
                            <h1 className="big-title2 col-span-12">
                                frontend developer 
                            </h1>
                        </article>
                    </div>
                </div>
            </div>

            <article className="mt-auto w-full h-[5.5rem] lg:h-[3rem] pb-6  flex items-center">
                <div className="grid grid-cols-12 w-full place-content-between">
                    <div className="text-xxsmall col-span-2 col-start-1 flex items-center">
                        based in <span className='text-xxsmall-white ml-1.5'> colombia</span>
                    </div>
                    <div className="text-xxsmall col-span-2 col-start-6 flex items-center justify-center">
                        [<ScrollBtn />]
                    </div>
                    <div className="col-span-3 col-start-10 flex items-center justify-end text-xxsmall">
                        <TimeZone/>
                    </div>
                </div>
            </article>
            
        </section>
    );
}

export default Hero;
