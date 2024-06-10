import React from 'react';
import { Link } from 'react-scroll';

const HeroBtn = () => {
    return (
         <button border-cut="bottom-right-purple"
            className="w-[86vw] sm:w-[68%] 2xl:w-[13.8vw] group relative h-12 sm:h-11 lg:h-8 flex justify-center 
                items-center">
            <Link to={"work"}
                className="group relative overflow-hidden text-xxsmall-purple tracking-widest">
                <span className="relative inline-flex">
                    <span className="duration-700 [transition-delay:0.02s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        c
                    </span>
                    <span className="duration-700 [transition-delay:0.04s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        h
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        e
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        c
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        k
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        &nbsp;
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        o
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        u
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        t
                    </span>
                    
                    <span className="duration-700 [transition-delay:0.12s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        &nbsp;
                    </span>
                    <span className="duration-700 [transition-delay:0.14s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        m
                    </span>
                    <span className="duration-700 [transition-delay:0.16s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        y
                    </span>                                    
                    <span className="duration-700 [transition-delay:0.12s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        &nbsp;
                    </span>
                    <span className="duration-700 [transition-delay:0.16s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        W
                    </span>
                    <span className="duration-700 [transition-delay:0.16s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        o
                    </span>
                    <span className="duration-700 [transition-delay:0.16s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        r
                    </span>
                    <span className="duration-700 [transition-delay:0.16s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        k
                    </span>
                </span>
            </Link>                  

        </button>
    )
}

export default HeroBtn