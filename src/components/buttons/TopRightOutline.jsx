import React from 'react'

const TopRightOutline = ({onClick}) => {
    return (
        <button border-cut="top-right" onClick={onClick}
            
            className="group relative px-[1rem] lg:px-6 h-7 lg:h-9 mt-6 flex items-center">
            <div 
                className="group relative overflow-hidden btn-title lg:text-xsmall-purple tracking-widest
                text-[var(--secondary)]">
                <span className="relative inline-flex">
                    <span className="duration-700 [transition-delay:0.02s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        v
                    </span>
                    <span className="duration-700 [transition-delay:0.04s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        i
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        s
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        i
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        t
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        &nbsp;
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        d
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        e
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        m
                    </span>
                    
                    <span className="duration-700 [transition-delay:0.12s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        o
                    </span>                    
                </span>
            </div>                  

        </button>
    )
}

export default TopRightOutline
