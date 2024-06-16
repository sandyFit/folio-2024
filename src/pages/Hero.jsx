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

            <div border-cut="bottom-right-black" className="grid">

                <div className="flex flex-col mt-1 lg:mt-40 relative flex-grow">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 place-content-between ">
                                                
                        <article className="w-full col-span-5 lg:col-span-3 row-start-2 col-start-1 flex flex-col 
                            mr-12 items-center uppercase text-zinc-300 mt-24 lg:mt-[-1.8rem]">
                            <span className='w-full text-[.72rem] lg:text-[.8rem]  uppercase text-zinc-400 
                                text-justify'>
                                Designer & Developer based in colombia. Currently
                                seeking roles or opportunities to innovate & collaborate on web development projects.
                                <br/>
                                <a href='mailto:sandy07r@gmail.com' className="relative text-zinc-50 font-[400]
                                    after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full 
                                    after:origin-bottom after:scale-x-0 after:bg-zinc-50 after:transition-transform 
                                    after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                    hover:after:scale-x-100">
                                    Let's connect
                                </a>.
                            </span>
                        </article>
                    </div>
                
                    <div className="grid items-start mt-16 lg:mt-36">
                        <article className='grid grid-cols-12 '>
                            <h3 className='title-h3 col-span-3 col-start-2 lg:col-start-9 row-start-1 
                                whitespace-nowrap '>
                                Graphic
                                <span className='title-h3-thin ml-3 '>designer</span> &</h3>
                            <h1 className="big-title col-span-12 col-start-1 row-start-2 lg:mt-16">
                                frontend developer 
                            </h1>
                        </article>
                    </div>
                </div>
            </div>

            <article className="mt-auto w-full mb-6 flex items-center">
                <div className="grid grid-cols-12 w-full place-content-center lg:place-content-between whitespace-nowrap">
                    <div className="hidden lg:inline-flex text-xxsmall col-span-3 col-start-1 row-start-1 mt-6 lg:mt-0">
                        portfolio
                        <span className=' text-xxsmall-white ml-1.5'>
                            &copy;{new Date().getFullYear()}
                        </span>
                    </div>
                    <div className="flex lg:hidden text-xxsmall-white col-span-2 col-start-6 row-start-1 justify-center
                        items-center whitespace-nowrap">
                        folio &copy; {new Date().getFullYear()}
                    </div>
                    <div className="text-xxsmall col-span-2 col-start-6 row-start-3 lg:row-start-1 mt-16 lg:mt-0 
                        mb-2 lg:mb-0 flex items-center justify-center">
                        [<ScrollBtn />]
                    </div>
                    <div className="col-span-3 col-start-6 lg:col-start-10 row-start-2 lg:row-start-1 flex items-center 
                        justify-end text-xxsmall">
                        <TimeZone/>
                    </div>
                </div>
            </article>
            
        </section>
    );
}

export default Hero;
