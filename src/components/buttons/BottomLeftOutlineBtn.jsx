import React from 'react'

const BottomLeftOutlineBtn = ({btnHref}) => {
    return (
        <button border-cut="bottom-left-cyan"
            className="group relative px-[1.45rem] lg:px-10 h-7 lg:h-9 mt-6 flex items-center ">
            <a href={btnHref} target='_blank'
                className="group relative overflow-hidden btn-title tracking-widest text-[var(--secondary)]">
                <span className="relative inline-flex">
                    <span className="duration-700 [transition-delay:0.02s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        c
                    </span>
                    <span className="duration-700 [transition-delay:0.04s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        o
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        d
                    </span>
                    <span className="duration-700 [transition-delay:0.06s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300">
                        e
                    </span>
                    
                              
                </span>
            </a>                  

        </button>
    )
}

export default BottomLeftOutlineBtn
