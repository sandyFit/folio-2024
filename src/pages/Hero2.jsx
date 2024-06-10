import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../assets/css/borders.css';
import ScrollBtn from '../components/buttons/ScrollBtn';
import TimeZone from '../components/ui/TimeZone';
import HeroBtn from '../components/buttons/HeroBtn';
import TextShimmerHero from '../components/featured/TextShimmerHero';

const Hero = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const initialTimeline = gsap.timeline({ defaults: { ease: "power3.out", duration: 2.5, delay: 0.5 } });
              
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
        <section id="index" className='w-full min-h-screen flex flex-col bg-zinc-950 relative px-6 sm:px-8 md:px-12 
            2xl:px-16 overflow-hidden'>
            
            <div border-cut="bottom-right-black"
                className="grid grid-cols-12 mt-44 px-16">
                <div className="absolute left-16 top-[6.5rem] w-[92%] h-[2px] bg-zinc-800 transition-all 
                            duration-[var(--duration)] ease-[var(--ease)]"></div>
                
                <h1 className="big-title2 col-span-9 col-start-1 textSlidingLeft overflow-hidden">
                    _Frontend developer
                </h1>

                <p className="big-title2 col-span-9 col-start-4 row-start-2 grid place-content-end textSlidingRight overflow-hidden">
                    with a designer's eye
                </p>

                <div className="w-[15vw] absolute bottom-40 right-[63rem]">
                    <img src="/img/me-bn.png" alt="" />
                </div>
            
                <div className='text-[.84rem] uppercase text-zinc-300 col-span-4 col-start-7 row-start-4 
                    grid place-content-end mt-8'>                  
                    <TextShimmerHero text={'Currently seeking opportunities to'}/>
                    <TextShimmerHero text={'innovate and collaborate on web'}/>
                    <TextShimmerHero text={'development projects.'}/>
                    
                    
                </div>
                {/* <div className="w-full col-span-2 col-start-11 row-start-5 mt-2 relative hero-content">
                    <HeroBtn/>
                </div> */}
            </div>

            <article className="w-full grid grid-cols-1 relative mt-24  2xl:mt-[rem] hero-content">               
                <div className="w-full grid grid-cols-3 place-content-between 
                    text-xxsmall uppercase  gap-1">
                    <span className='col-span-1 col-start-1 place-self-start whitespace-nowrap'>
                        based in <span className='text-xxsmall-white ml-1.5'> colombia</span>
                    </span>
                    <span className='col-span-1 col-start-2 flex justify-center text-xxsmall-white'>
                        [<ScrollBtn />]
                    </span>

                    <div className="col-span-1 col-start-3 lg:flex w-full grid place-content-end">
                        <TimeZone/>
                    </div>
                </div>

                {/* <span className='2xl:hidden flex mt-16 lg:mt-20 text-xsmall-white'>
                    [<ScrollBtn />]
                </span>                */}
            </article>
        </section>
    );
}

export default Hero;
