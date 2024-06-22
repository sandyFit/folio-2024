import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';

const ScrollBtn = () => {
    useEffect(() => {
        const animateText = () => {
            gsap.fromTo(
                '.turning-text',
                { rotateY: '0deg' },
                {
                    rotateY: '360deg',
                    ease: 'power3.inOut',
                    duration: 0.8,
                    stagger: 0.1, // Stagger animation for each character
                    onComplete: () => gsap.set('.turning-text', { rotateY: '0deg' }),
                }
            );

            // Animate color change at 180 degrees rotation
            gsap.fromTo(
                '.turning-text',
                { rotateY: '180deg' },
                {
                    rotateY: '0deg',

                    ease: 'power3.inOut',
                    duration: 0.01,
                    stagger: 0.1,
                    delay: 0.2,
                    onComplete: () => gsap.set('.turning-text', { rotateY: '0deg' }),
                }
            );
        };

        const interval = setInterval(animateText, 10000); // Start animation interval
        animateText(); // Initial animation

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <button className="w-[42vw] sm:w-[36vw] 2xl:w-[11vw] group relative">
            <Link to="work" className="group relative overflow-hidden text-xxsmall-white tracking-widest">
                <span className="text-xxsmall-white flex whitespace-nowrap justify-center items-center group">
                    {/* Animated text */}
                    <span className="relative inline-flex items-center">
                        {/* Map words with spaces */}
                        {['scroll', 'to', 'explore'].map((word, index) => (
                            <React.Fragment key={index}>
                                {word.split('').map((char, charIndex) => (
                                    <span
                                        key={charIndex}
                                        className={`turning-text`}
                                        style={{
                                            marginRight: charIndex === word.length - 1 ? '0.5em' : '0',
                                            display: 'inline-block',
                                            
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                                {/* Add space between words */}
                                {index !== ['scroll', 'to', 'explore'].length - 1 && (
                                    <span className="turning-text text-cyan-300">&nbsp;</span>
                                )}
                            </React.Fragment>
                        ))}
                    </span>
                </span>
            </Link>
        </button>
    );
};

export default ScrollBtn;
