import React, { useState } from 'react'
import { Link } from 'react-scroll';
import '../assets/css/borders.css';
import TimeZone from '../components/ui/TimeZone';



const TextNav = () => {

    return (
        <section 
            className='w-full h-[80px] absolute top-0 z-20 flex justify-between px-6 sm:px-8 md:px-12 2xl:px-16
                '>     
            <div className="w-full grid grid-cols-3 place-content-between mt-6 2xl:mt-8">
                <div className="flex w-full relative gap-2 2xl:gap-[44rem] ">
                    {/* <div className="hidden lg:flex w-full ">
                        <TimeZone/>
                    </div> */}

                    <h2 className='title-h2 whitespace-nowrap'>
                        Trish Ramos
                    </h2>

                    <div className='flex w-full relative items-center'>       
                        <ul className='w-[68%] 2xl:w-[18vw] flex justify-between items-start gap-2 2xl:gap-2
                            text-xxsmall-white mr-20 mt-12 2xl:mt-4'>               
                            <Link to={"info"} className="group relative overflow-hidden ">
                                <span className="relative inline-flex ">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        i
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        n
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        f
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        o
                                    </span>
                                    
                                </span>
                            </Link>
                                        
                            <Link to={"reach-out"} className="group relative overflow-hidden">
                                <span className="relative inline-flex">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        r
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        e
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        a
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        c
                                    </span>
                                    <span className="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        h
                                    </span>
                                    <span className="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        &nbsp;
                                    </span>
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        o
                                    </span>                       
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        u
                                    </span>                       
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        t
                                    </span>                       
                                </span>
                            </Link>
                                        
                            <Link to={"cv"} className="group relative overflow-hidden">
                                <span className="relative inline-flex">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        R
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        e
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        a
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        d
                                    </span>
                                    <span className="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        &nbsp;
                                    </span>
                                    <span className="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        C
                                    </span>
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        V
                                    </span>                       
                                </span>
                            </Link>
                            <button className="ml-8">
                                <img src="/square-brackets.svg" alt="" className='absolute top-[2.5rem] 2xl:top-7 right-6 2xl:right-16' />
                                <span className='w-[.9rem] h-[1rem] rounded bg-violet-500 absolute right-[1.9rem] 
                                    2xl:right-[4.376rem] top-[2.7rem] 2xl:top-[2rem]'></span>
                            </button>
                        </ul>
                    </div>
                </div>  
            </div>      
        </section>
    )
}

export default TextNav;
