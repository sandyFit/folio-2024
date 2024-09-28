import React from 'react'

const GoToHomeBtn = () => {
    return (
        <button>
            <a href="/" className="group relative w-full overflow-hidden text-xxsmall text-zinc-300">
                <span className="relative inline-flex items-center">
                    {['g', 'o', '&nbsp;', 't', 'o', '&nbsp;', 'h', 'o', 'm', 'e', 'p', 'a', 'g', 'e']
                        .map((char, index) => (
                            <span
                                key={index}
                                className={`duration-700 [transition-delay:${index * 0.02}s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-[var(--secondary)]`}
                                dangerouslySetInnerHTML={{ __html: char === '&nbsp;' ? '&nbsp;' : char }}
                            />
                    ))}
                </span>
            </a>
        </button>
    )
}

export default GoToHomeBtn;
