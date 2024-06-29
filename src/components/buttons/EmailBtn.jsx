import React, { useState, useEffect } from 'react';
import { BsCheck2, BsCopy } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EmailBtn = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopiedText = () => {
    const emailAddress = 'info@trishramos.com';
    
    // Using navigator clipboard API to copy text
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        console.log('Email address copied to clipboard!');
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch(err => {
        console.error('Failed to copy email address to clipboard:', err);
      });
    };
    
    gsap.registerPlugin(ScrollTrigger);

    // Function to handle smooth transition using GSAP
    const handleIconTransition = () => {
        const iconTimeline = gsap.timeline();

        // Smoothly animate the transition
        iconTimeline.to('.icon-transition', {
            duration: 0.3,
            scale: 0.8,
            ease: 'power3.out',
            onComplete: () => {
                iconTimeline.to('.icon-transition', {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power3.in',
                });
            }
        });
    };

    useEffect(() => {
        handleIconTransition();
    }, [isCopied]); // Trigger transition effect when isCopied changes

    return (
        <button
            onClick={handleCopiedText}
            className="title-h4-min flex whitespace-nowrap justify-center items-center group"
        >
            {/* Animated characters */}
            <span className="relative inline-flex items-center">
                {['i', 'n', 'f', 'o', '{', '@', '}', 't', 'r', 'i', 's', 'h', 'r', 'a', 'm',
                    'o', 's', '.', 'c', 'o', 'm']
                    .map((char, index) => (
                    <span
                        key={index}
                            className={`duration-700 [transition-delay:${index * 0.02}s] 
                            group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300`}>
                        {char}
                    </span>
                ))}
            </span>
            {/* Icon for copy feedback */}
           <span className="icon-transition ml-2 mt-3 md:mt-2 base:mt-3 ">
                {isCopied ? (
                    <BsCheck2 className="text-cyan-300 text-2xl md:text-[2.2rem] base:text-[2.5rem] 
                        xl:text-[2.8rem] " />
                ) : (
                    <BsCopy className="text-2xl md:text-[1.8rem] base:text-[2rem] 
                        xl:text-[2.8rem] " />
                )}
            </span>
        </button>
    );
};

export default EmailBtn;
