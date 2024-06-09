import React from 'react'

const TopRightOutline = () => {
    return (
        <button border-cut="bottom-right-purple"
            className="group relative px-10 py-1 text-xxsmall-white mt-6 ">
            <a to={"work"}
                className="group relative overflow-hidden text-xsmall-purple tracking-widest">
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
            </a>                  

        </button>
    )
}

export default TopRightOutline