import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../assets/css/borders.css';
import ScrollBtn from '../components/buttons/ScrollBtn';
import TimeZone from '../components/ui/TimeZone';
import ColorBtn from '../components/buttons/ColorBtn';

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
                xl-sm:px-16'>

            <div
                border-cut="bottom-right-black" 
                className="grid w-full">
                <div className="w-full flex flex-col mt-5 lg:mt-[8rem] relative flex-grow">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-4 lg-xl:grid-cols-5 2xl-sm:grid-cols-8
                        2xl-xl:grid-cols-12">
                        <article className="w-full col-span-1 lg:col-span-2 lg-xl:col-span-2 xl:col-span-2 
                            2xl-sm:col-span-3 
                            row-start-2 col-start-1 flex flex-col  uppercase text-zinc-300 mt-24
                            lg:mt-[-1.2rem] lg-lg:mt-[-2.6rem] xl:mt-[-1.8rem] relative">
                            <span className='w-full text-xxsmall text-justify'>
                                Designer & Developer based in Colombia. Currently seeking  dev roles to
                                collaborate with creative minds & contribute to innovative projects.
                                
                                <a href='mailto:sandy07r@gmail.com' className="relative text-cyan-300 font-[500] 
                                    after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-full 
                                    after:origin-bottom after:scale-x-0 after:bg-cyan-300 after:transition-transform 
                                    after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom 
                                    hover:after:scale-x-100 ml-2">
                                    Let's connect
                                </a>.
                            </span>
                        </article>

                        <div className="w-full hidden lg-lg:flex col-span-1 col-start-12 justify-end 
                            ml-12">
                            <ColorBtn/>
                        </div>
                    </div>                
                
                    <div className="w-full grid mt-16 md:mt-10 lg:mt-64 lg-lg:mt-52 lg-2xl:mt-52
                        xl-sm:mt-[12.4rem] xl:mt-[10.5rem] xl-lg:mt-40 xl-2xl:mt-[9.2rem] 2xl-sm:mt-36 2xl-md:mt-[8rem]
                        2xl-lg:mt-32 2xl-xl:mt-28 3xl:mt-32">
                        <article className='w-full hidden lg:grid grid-cols-1 xl:grid-cols-12 '>
                            <h3 className='title-h3 col-span-6 col-start-1 lg:col-start-9 xl:col-start-8 row-start-1 
                                whitespace-nowrap flex justify-end 3xl:mr-6'>
                                Graphic
                                <span className='title-h3-thin mx-3 '>designer</span>
                                &
                            </h3>
                            <h1 className="big-title col-span-12 col-start-1 row-start-2 lg-lg:mt-3 xl-sm:mt-5 xl:mt-10 
                                2xl-sm:mt-12 2xl-md:mt-[3.2rem] 2xl-xl:mt-[3.8rem] text-center whitespace-nowrap">
                                frontend developer
                            </h1>
                        </article>

                        <article className='grid grid-cols-1 lg:hidden text-center place-content-center'>
                            <h3 className='title-h3 col-span-1 col-start-1 row-start-1 
                                whitespace-nowrap text-center'>
                                Graphic
                                <span className='title-h3-thin mx-1'>designer</span > &</h3>
                            <h1 className="big-title col-span-1 col-start-1 row-start-2  grid 
                                place-items-center whitespace-nowrap">
                                frontend <span>developer</span>
                            </h1>
                        </article>
                    </div>
                </div>
            </div>

            <article className="mt-auto w-full mb-6 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg-md:place-content-between 
                    whitespace-nowrap">
                    <div className="hidden lg-lg:flex text-xxsmall-cyan col-span-1 col-start-1 
                        row-start-1 justify-start items-center">
                        portfolio
                        <span className='text-xxsmall-white ml-1.5'>
                            &copy;{new Date().getFullYear()}
                        </span>
                    </div>

                    <div className="flex lg-lg:hidden text-xxsmall-white col-span-1 col-start-1 row-start-1 w-full
                         whitespace-nowrap justify-center lg:justify-start ">
                        folio &copy; {new Date().getFullYear()}
                    </div>
                    <div className="text-xxsmall-cyan col-span-1 col-start-1 lg:col-start-2 row-start-3 lg:row-start-1 
                        mt-16 lg:mt-0 mb-2 lg:mb-0 flex justify-center items-center">
                        [ &nbsp; &nbsp;<ScrollBtn /> &nbsp;]
                    </div>
                    <div className="col-span-1 col-start-1 lg:col-start-3 row-start-2 lg:row-start-1 
                        flex items-center justify-center lg:justify-end text-xxsmall ">
                        <TimeZone/>
                    </div>
                </div>
            </article>
            
        </section>
    );
}

export default Hero;
