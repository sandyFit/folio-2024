import React, { useState } from 'react'
import { Link } from 'react-scroll';
import '../assets/css/borders.css';
import TimeZone from '../components/ui/TimeZone';
import MobileMenu from '../components/ui/MobileMenu';



const TextNav = () => {

    return (
        <section 
            className='w-full h-[80px] absolute top-0 z-20 flex justify-between px-6 sm:px-8 md:px-12 2xl:px-16'>     
            <div className="w-full grid grid-cols-1 place-content-between mt-9 lg:mt-12">
                <div className="grid grid-cols-12 place-content-between items-center w-full relative ">
                    <h3 className='xsm-title col-span-5 lg:col-span-3 col-start-1'>
                        Trish Ramos
                    </h3>

                    <div className='hidden lg:flex col-span-5 col-start-9 w-full relative justify-end'>       
                        <ul className='flex justify-between gap-2 xsm-title'>               
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
                                        c
                                    </span>
                                    <span className="duration-700 [transition-delay:0.14s] 
                                        group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-50">
                                        V
                                    </span>
                                </span>
                            </Link>

                            {/* <button className=''>
                                <MobileMenu/>
                            </button> */}

                            
                        </ul>
                    </div>
                </div>  
            </div>  
            <div className="absolute left-6 lg:left-16 top-[5rem] lg:top-[6.8rem] w-[86%] lg:w-[92%] 
                h-[2px] bg-zinc-800 "></div>
        </section>
    )
}

export default TextNav;

