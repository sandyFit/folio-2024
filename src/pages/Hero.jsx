import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../assets/css/borders.css';
import ScrollBtn from '../components/buttons/ScrollBtn';
import TimeZone from '../components/ui/TimeZone';
import ColorBtn from '../components/buttons/ColorBtn';

const palettes = [
    'palette-1', 
    'palette-2', 
    'palette-3', 
    'palette-4', 
]


const Hero = () => {

    const [paletteIndex, setPaletteIndex] = useState(0);
    const currentPalette = palettes[paletteIndex];
    const bgColorClass = `bg-${currentPalette}-primary`; 
    const textColorClass = `text-${currentPalette}-secondary`; 

    
    const switchPallete = () => {
        setPaletteIndex((prevIndex) => (prevIndex + 1) % palettes.length);
    }


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const master = gsap.timeline();
        const heroTitle = new SplitType('.hero-title', { types: 'chars' });
        const chars = heroTitle.chars;

        const setInitialState = () => {
            
            gsap.set(['.description', '.color__switch'], {
                autoAlpha: 0
            })

            gsap.set(chars, {
                y: 20,
                autoAlpha: 0
            });

            gsap.set(['.small__text', '.small__title' ], {
                yPercent: 100,
                autoAlpha: 0
            });
        };

        const titleAnimation = () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",

                }
            });

            tl.to(chars, {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                duration: 1,
            })
                .to('.small__text', {
                    yPercent: 0,
                    autoAlpha: 1,
                    stagger: 0.5,
                    
                }, .5)
            
                .to('.small__title', {
                    yPercent: 0,
                    autoAlpha: 1,
                    stagger: 0.1,
                    delay: 1
                }, '<')

                .to(['.description', '.color__switch'], {
                    autoAlpha: 1,
                    stagger: 0.1,
                    delay: .2
                }, '<');
            
            return tl;
        }

        const scrollTimeline = () => {
            const st = gsap.timeline({
                scrollTrigger: {
                trigger: "#index",
                start: "top top",
                end: "bottom top",
                scrub: true,
                toggleActions: 'play none none reverse',
                }
            });
                 
            st.to('.hero-content', {
                autoAlpha: 0,
                duration: 0.5
            });
            return st;
       }
        master 
            .add(setInitialState())
            .add(titleAnimation(), '<')
            .add(scrollTimeline(), '<')
        
    }, []);

    return (
        <section id="index"            
            className={`w-full min-h-screen flex flex-col bg-zinc-950 relative px-6 md:px-10 base:px-12 
                xl-sm:px-16 ${bgColorClass} transition-all`}>
            <div border-cut="bottom-right-black" className="grid w-full">
                <header className="w-full flex flex-col mt-5 lg:mt-[8rem] relative flex-grow">
                    <div className="w-full grid grid-cols-2 ">
                        <article className="w-full lg:w-[45%] col-span-1  row-start-2 col-start-1 flex flex-col  mt-24 description
                            lg:mt-[-1.2rem] lg-lg:mt-[-2.6rem] xl:mt-[-1.8rem] relative">
                            <p className='w-full text-xxsmall text-justify'>
                                Designer & Developer based in Colombia. Currently seeking dev roles to
                                collaborate with creative minds & contribute to innovative projects.
                                
                                    Let's connect
                                <a href='mailto:sandy07r@gmail.com' className={`relative ${textColorClass} font-[500] 
                                    after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px]
                                    after:w-full after:origin-bottom after:scale-x-0 after:bg-cyan-300
                                    after:transition-transform after:duration-300
                                    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                    hover:after:scale-x-100 ml-2 `}>
                                </a>.
                            </p>
                        </article>

                        <aside className="w-full hidden lg-lg:flex col-span-2 col-start-11 ml-[5.4rem] items-center 
                            color__switch">
                            <p className='ghost-text'>
                                vibe shift
                            </p>
                            <ColorBtn onClick={switchPallete}/>
                        </aside>
                    </div>                  

                     <section className="w-full grid mt-16 md:mt-10 lg:mt-64 lg-lg:mt-52 lg-2xl:mt-52
                        xl-sm:mt-[12.4rem] xl:mt-[10.5rem] xl-lg:mt-40 xl-2xl:mt-[9.2rem] 2xl-sm:mt-36 2xl-md:mt-[8rem]
                        2xl-lg:mt-32 2xl-xl:mt-28 3xl:mt-32">
                        <div className='w-full hidden lg:grid grid-cols-1 xl:grid-cols-12 '>
                            <h3 className='title-h3 col-span-6 col-start-1 lg:col-start-9 xl:col-start-8 row-start-1 
                                whitespace-nowrap flex justify-end 3xl:mr-6 small__title'>
                                Graphic
                                <span className='title-h3-thin mx-3 '>designer</span>
                                &
                            </h3>
                            <h1 className={`big-title col-span-12 col-start-1 row-start-2 lg-lg:mt-3 xl-sm:mt-5 
                                xl:mt-10 2xl-sm:mt-12 2xl-md:mt-[3.2rem] 2xl-xl:mt-[3.8rem] text-center
                                ${textColorClass} whitespace-nowrap hero-title`}>
                                web developer
                            </h1>
                        </div>

                        <div className='grid grid-cols-1 lg:hidden text-center place-content-center'>
                            <h3 className='title-h3 col-span-1 col-start-1 row-start-1 
                                whitespace-nowrap text-center'>
                                Graphic
                                <span className='title-h3-thin mx-1'>designer</span > &</h3>
                            <h1 className="big-title col-span-1 col-start-1 row-start-2  grid 
                                place-items-center whitespace-nowrap">
                                frontend <span>developer</span>
                            </h1>
                        </div>
                    </section>                        
                </header>
            </div>

            <footer className="mt-auto w-full mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg-md:place-content-between whitespace-nowrap">
                    <div className="hidden lg-lg:flex text-xxsmall-cyan col-span-1 col-start-1 row-start-1 
                        justify-start items-center small__text">
                        portfolio
                        <span className='text-xxsmall-white ml-1.5'>
                            &copy;{new Date().getFullYear()}
                        </span>
                    </div>

                    <div className="flex lg-lg:hidden text-xxsmall-white col-span-1 col-start-1 row-start-1 w-full 
                        whitespace-nowrap justify-center lg:justify-start small__text">
                        folio &copy; {new Date().getFullYear()}
                    </div>
                    <div className="text-xxsmall-cyan col-span-1 col-start-1 lg:col-start-2 row-start-3 lg:row-start-1 
                        mt-16 lg:mt-0 mb-2 lg:mb-0 flex justify-center items-center small__text">
                        [ &nbsp; &nbsp;<ScrollBtn /> &nbsp;]
                    </div>
                    <div className="col-span-1 col-start-1 lg:col-start-3 row-start-2 lg:row-start-1 flex items-center 
                        justify-center lg:justify-end text-xxsmall small__text">
                        <TimeZone/>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Hero;

