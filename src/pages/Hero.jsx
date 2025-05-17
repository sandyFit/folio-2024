import React, { useContext, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../assets/css/borders.css';
import ScrollBtn from '../components/buttons/ScrollBtn';
import TimeZone from '../components/ui/TimeZone';
import ColorBtn from '../components/buttons/ColorBtn';
import { GlobalContext } from '../utils/globalContext';


const Hero = () => {
    const { switchTheme } = useContext(GlobalContext);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const master = gsap.timeline();

        const setInitialState = () => {

            gsap.set(['.description', '.color__switch'], {
                autoAlpha: 0
            })

            gsap.set('.title', {
                y: 200,
                autoAlpha: 0
            });

            gsap.set('.small__text', {
                yPercent: 100,
                autoAlpha: 0
            });
            gsap.set('.small__title', {
                yPercent: -100,
                autoAlpha: 0
            });
        };

        const titleAnimation = () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power2.out",

                }
            });

            tl.to('.title', {
                y: 0,
                autoAlpha: 1,
                stagger: 0.5,
                duration: 1,
            })
                .to('.small__text', {
                    yPercent: 0,
                    autoAlpha: 1,
                    stagger: 0.5,
                    delay: .3
                }, .5)

                .to('.small__title', {
                    yPercent: 0,
                    autoAlpha: 1,
                    stagger: 0.1,

                }, '<')

                .to(['.description', '.color__switch'], {
                    autoAlpha: 1,
                    stagger: 0.1,
                    delay: .3
                }, '<');

            return tl;
        }

        
        master
            .add(setInitialState())
            .add(titleAnimation(), '<')
            

        return () => {
            console.log('Cleaning up ScrollTrigger');
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <section id="index"
            className='w-full min-h-screen flex flex-col relative px-6 md:px-10 base:px-12 
                xl-sm:px-16 mb-32 '>

            <div className="grid w-full">
                <header className="w-full flex flex-col mt-5 lg:mt-[8rem] relative flex-grow">
                    <div className="w-full grid lg:grid-cols-2 ">
                        <article className="w-full lg:w-[60%] lg-lg:w-[65%] xl-md:w-[50%] xl:w-[46%] 2xl-sm:w-[38%] 
                            2xl-md:w-[36%] 2xl-lg:w-[35%] 2xl-xl:w-[32%] 3xl:w-[30%] col-span-1 lg:col-span-2 lg-xl:col-span-2 
                            xl:col-span-2 2xl-sm:col-span-3 row-start-2 col-start-1 flex flex-col  mt-24 description
                            lg:mt-[-1.2rem] lg-lg:mt-[-2.6rem] xl:mt-[-1.8rem] relative">
                            <p className='w-full text-xxsmall text-zinc-300 text-justify'>
                                Designer & Developer based in Colombia. Currently seeking dev roles to
                                collaborate with creative minds & contribute to innovative projects.

                                <a href='mailto:sandy07r@gmail.com' className="relative text-[var(--secondary)] font-[500] 
                                    after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px]
                                    after:w-full after:origin-bottom after:scale-x-0 after:bg-[var(--secondary)]
                                    after:transition-transform after:duration-300
                                    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                    hover:after:scale-x-100 ml-2">
                                    Let's connect
                                </a>.
                            </p>
                        </article>

                        <aside className="w-full hidden lg-lg:flex col-span-2 col-start-12 justify-end items-center 
                            color__switch ml-6">
                            <p className='text-xxsmall text-zinc-400 tracking-widest'>
                                vibe shift
                            </p>
                            <ColorBtn onClick={switchTheme} />
                        </aside>
                    </div>

                    <section className="w-full grid mt-12 md:mt-10 lg:mt-64 lg-lg:mt-52 lg-2xl:mt-52
                        xl-sm:mt-[12.4rem] xl:mt-[10.5rem] xl-lg:mt-40 xl-2xl:mt-[9.2rem] 2xl-sm:mt-36 
                        2xl-md:mt-[8rem] 2xl-lg:mt-32 2xl-xl:mt-28 3xl:mt-32">
                        <div className='w-full grid grid-cols-1 xl:grid-cols-12 '>
                            <h3 className='title-h3 col-span-6 col-start-1 lg:col-start-9 xl:col-start-8 row-start-1 
                                whitespace-nowrap flex justify-center lg:justify-end 3xl:mr-6 small__title'>
                                Graphic
                                <span className='title-h3-thin mx-3 '>designer</span>
                                &
                            </h3>
                            <h1 className="big-title hidden lg:block col-span-12 col-start-1 row-start-2 lg:mt-[-.8rem] 
                                lg-md:mt-0 xl-sm:mt-5 lg-xl:mt-3 xl:mt-6 xl-xl:mt-10 2xl-sm:mt-12 2xl-md:mt-[3.2rem] 
                                2xl-lg:mt-[3.6rem] 2xl-xl:mt-[3.8rem] text-center 
                                whitespace-nowrap text-[var(--secondary)] title
                                hero-title">
                                full stack developer
                            </h1>
                            <h1 className="big-title col-span-1 col-start-1 row-start-2 grid 
                                place-items-center lg:hidden whitespace-nowrap text-[var(--secondary)]">
                                full stack <span>developer</span>
                            </h1>
                        </div>
                    </section>
                </header>
            </div>

            <footer className="mt-auto w-full mb-10 2xl-xl:mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg-md:place-content-between whitespace-nowrap 
                    small__text">
                    <div className="hidden lg-lg:flex text-xxsmall col-span-1 col-start-1 row-start-1 
                        justify-start items-center text-[var(--secondary)]">
                        portfolio
                        <span className='text-xxsmall text-zinc-300 ml-1.5 '>
                            &copy;{new Date().getFullYear()}
                        </span>
                    </div>

                    <div className="flex lg-lg:hidden text-xxsmall text-zinc-300 col-span-1 col-start-1 
                        row-start-1 w-full whitespace-nowrap justify-center lg:justify-start ">
                        folio &copy; {new Date().getFullYear()}
                    </div>
                    <div className="text-xxsmall-cyan col-span-1 col-start-1 lg:col-start-2 row-start-3 lg:row-start-1 
                        mt-12 lg:mt-0 mb-2 lg:mb-0 flex justify-center items-center text-[var(--secondary)]">
                        [ &nbsp; &nbsp;<ScrollBtn /> &nbsp;]
                    </div>
                    <div className="col-span-1 col-start-1 lg:col-start-3 row-start-2 lg:row-start-1 flex items-center 
                        justify-center lg:justify-end text-xxsmall ">
                        <TimeZone />
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Hero;

