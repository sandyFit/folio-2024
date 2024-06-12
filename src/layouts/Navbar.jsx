import React, { useState } from 'react'
import { Link } from 'react-scroll';
import '../assets/css/borders.css';
import TimeZone from '../components/ui/TimeZone';



const TextNav = () => {

    return (
        <section 
            className='w-full h-[80px] absolute top-0 z-20 flex justify-between px-6 sm:px-8 md:px-12 2xl:px-16
                '>     
            <div className="w-full grid grid-cols-1 place-content-between mt-6 2xl:mt-8 ">
                <div className="grid grid-cols-7 place-content-between w-full relative ">
                    {/* <div className="hidden lg:flex w-full ">
                        <TimeZone/>
                    </div> */}

                    <h2 className='xsm-title col-span-1 col-start-1'>
                        Trish Ramos
                    </h2>

                    <div className='col-span-2 col-start-6 w-full flex justify-end relative ml-16'>       
                        <ul className='w-[68%] 2xl:w-full flex justify-between gap-2 2xl:gap-2
                            xxsm-title mr-20 mt-12 2xl:mt-4'>               
                            <Link to={"projects"} className="group relative overflow-hidden ">
                                <span className="relative inline-flex ">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        p
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        r
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        o
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        j
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        e
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        c
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        t
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        s
                                    </span>
                                    ,
                                    
                                </span>
                            </Link>

                            <Link to={"info"} className="group relative overflow-hidden ">
                                <span className="relative inline-flex ">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        i
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        n
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        f
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        o
                                    </span>
                                    ,
                                </span>
                            </Link>
                                        
                            <Link to={"contact"} className="group relative overflow-hidden">
                                <span className="relative inline-flex">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        c
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        o
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        n
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        t
                                    </span>
                                    <span className="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50 ]">
                                        a
                                    </span>
                                    <span className="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50 [word-spacing:0.1em]">
                                        c 
                                    </span>
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        t
                                    </span>     
                                    ,
                                </span>
                            </Link>
                                        
                            <Link to={"cv"} className="group relative overflow-hidden">
                                <span className="relative inline-flex">                                  
                                    <span className="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        C
                                    </span>
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        V
                                    </span>      
                                    
                                </span>
                            </Link>

                            <button className="ml-8">
                                <img src="/square-brackets.svg" alt="" className='absolute top-[2.5rem] 2xl:top-7 right-6 2xl:right-16' />
                                <span className='w-[.9rem] h-[1rem] rounded bg-cyan-300 absolute right-[1.9rem] 
                                    2xl:right-[4.376rem] top-[2.7rem] 2xl:top-[2rem]'></span>
                            </button>
                        </ul>
                    </div>
                </div>  
            </div>  
            <div className="absolute left-16 top-[6.8rem] w-[92%] h-[2px] bg-zinc-800 transition-all 
                        duration-[var(--duration)] ease-[var(--ease)]"></div>
        </section>
    )
}

export default TextNav;

