import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../assets/css/borders.css';
import ScrollBtn from '../components/buttons/ScrollBtn';
import TimeZone from '../components/ui/TimeZone';

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
            className='w-full min-h-screen flex flex-col bg-zinc-950 relative px-6 md:px-10 base:px-12
                lg-lg:px-16'>

            <div
                border-cut="bottom-right-black" 
                className="grid">
                <div className="flex flex-col mt-5 lg:mt-[8rem] relative flex-grow">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-6 lg-lg:grid-cols-12">
                        <article className="w-full col-span-1 lg:col-span-3 lg-lg:col-span-4 xl:col-span-3 
                            row-start-2 col-start-1 flex flex-col mr-12 uppercase text-zinc-300 mt-24
                            lg:mt-0 xl:mt-[-1.8rem] relative">
                            <span className='w-full text-xxsmall text-justify'>
                                Designer & Developer based in Colombia. Currently seeking roles or opportunities to
                                innovate & collaborate on web development projects.

                                <a href='mailto:sandy07r@gmail.com' className="relative text-cyan-300 font-[500] 
                                    after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full 
                                    after:origin-bottom after:scale-x-0 after:bg-cyan-300 after:transition-transform 
                                    after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                                    hover:after:scale-x-100 ml-2">
                                    Let's connect
                                </a>.
                            </span>
                        </article>

                        <div className="hidden xl:flex col-span-1 col-start-12">
                            <span className='w-[1rem] h-[1.1rem] rounded bg-cyan-300 ml-[5.65rem] mt-2'></span>
                            <img src="/big-brackets.svg" alt="Big Brackets" className='absolute -right-10' />
                        </div>
                    </div>                
                
                    <div className="grid items-start mt-16 md:mt-10 base:mt-16 lg:mt-24 lg-md:mt-56 xl-sm:mt-48
                        xl:mt-28 2xl:mt-36 text-center">
                        <article className='hidden lg:grid lg:grid-cols-1 xl:grid-cols-12 '>
                            <h3 className='title-h3 col-span-6 col-start-1 lg:col-start-9 row-start-1 
                                whitespace-nowrap '>
                                Graphic
                                <span className='title-h3-thin mx-3 '>designer</span>
                                &
                            </h3>
                            <h1 className="big-title col-span-12 col-start-1 row-start-2 lg-lg:mt-3 xl-sm:mt-5 xl:mt-10 
                                2xl:mt-16 whitespace-nowrap">
                                frontend developer
                            </h1>
                        </article>

                        <article className='grid grid-cols-1 lg:hidden text-center place-content-center'>
                            <h3 className='title-h3 col-span-1 col-start-1 row-start-1 
                                whitespace-nowrap text-center'>
                                Graphic
                                <span className='title-h3-thin mx-1'>designer</span > &</h3>
                            <h1 className="big-title col-span-1 col-start-1 row-start-2 lg:mt-16 grid 
                                place-items-center whitespace-nowrap">
                                frontend <span>developer</span>
                            </h1>
                        </article>
                    </div>
                </div>
            </div>

            <article className="mt-auto w-full mb-6 lg:mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:place-content-between 
                    whitespace-nowrap">
                    <div className="hidden lg:inline-flex text-xxsmall-cyan col-span-1 col-start-1 
                        row-start-1 mt-6 md:mt-3 lg:mt-0">
                        portfolio
                        <span className='text-xxsmall-white ml-1.5'>
                            &copy;{new Date().getFullYear()}
                        </span>
                    </div>

                    <div className="flex lg:hidden text-xxsmall-white col-span-1 col-start-1 row-start-1 w-full
                         whitespace-nowrap justify-center">
                        folio &copy; {new Date().getFullYear()}
                    </div>
                    <div className="text-xxsmall-cyan col-span-1 col-start-1 lg:col-start-2 row-start-3 lg:row-start-1 
                        mt-16 lg:mt-0 mb-2 lg:mb-0 flex justify-center">
                        [ &nbsp; &nbsp;<ScrollBtn /> &nbsp;]
                    </div>
                    <div className="col-span-1 col-start-1 lg:col-start-3 row-start-2 lg:row-start-1 
                        flex
                        items-center justify-center lg:justify-end text-xxsmall">
                        <TimeZone/>
                    </div>
                </div>
            </article>
            
        </section>
    );
}

export default Hero;
