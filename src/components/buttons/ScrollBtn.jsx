import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';

const ScrollBtn = () => {
    useEffect(() => {
        const animateText = () => {
            gsap.fromTo('.turning-text',
                { rotateY: '0deg' },
                {
                    rotateY: '360deg',
                    ease: 'power3.inOut',
                    duration: 2.5,
                    stagger: 0.02,
                    onComplete: () => gsap.set('.turning-text', { rotateY: '0deg' })
                }
            );
        };

        const interval = setInterval(animateText, 20000);
        animateText(); // Initial animation

        return () => clearInterval(interval);
    }, []);

    return (
        <button className="w-[42vw] sm:w-[36vw] 2xl:w-[12vw] group relative">
            <Link to={"work"} className="group relative overflow-hidden text-xxsmall-white tracking-widest">
                <span className="relative inline-flex">
                    <span className="turning-text group-hover:text-cyan-300">
                        s
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        c
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        r
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        o
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        l
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        l
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        &nbsp;
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        t
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        o
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        &nbsp;
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        e
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        x
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        p
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        l
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        o
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        r
                    </span>
                    <span className="turning-text group-hover:text-cyan-300">
                        e
                    </span>
                </span>
            </Link>
        </button>
    );
};

export default ScrollBtn;
