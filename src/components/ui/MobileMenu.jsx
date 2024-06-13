import React from 'react';
import { Link } from 'react-scroll';

const MobileMenu = () => {
    return (
        <div className='flex lg:hidden w-1/2 h-1/2 bg-cyan-300 absolute inset-0'>
            <article 
                className="w-full grid grid-cols-2 place-content-start relative">                         
                <ul className='w-[68%] col-span-1 2xl:w-full flex flex-col justify-between gap-2 2xl:gap-2
                    xsm-title mr-20 '>               
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
                </ul>
            </article>
        </div>
    )
}

export default MobileMenu;
