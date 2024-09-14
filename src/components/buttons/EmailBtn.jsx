import React, { useState, useEffect } from 'react';
import { BsCheck2, BsCopy } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EmailBtn = ({ handleCopiedText }) => {
  const [isCopied, setIsCopied] = useState(false);
    
  gsap.registerPlugin(ScrollTrigger);

  const handleIconTransition = () => {
      const iconTimeline = gsap.timeline();

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
  }, [isCopied]);

  return (
      <button
          onClick={() => {
              handleCopiedText();
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 1500);
          }}
          className="reg-title text-[var(--secondary)] flex whitespace-nowrap justify-center items-center group"
      >
          <span className="relative inline-flex items-center">
              {['i', 'n', 'f', 'o', '{', '@', '}', 't', 'r', 'i', 's', 'h', 'r', 'a', 'm', 'o', 's', '.', 'c', 'o', 'm']
                  .map((char, index) => (
                      <span key={index} className={`duration-700 [transition-delay:${index * 0.02}s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300`}>
                      {char}
                  </span>
              ))}
          </span>
          <span className="icon-transition ml-2 3xl:ml-5 mt-3 md:mt-2 base:mt-10 text-[var(--secondary)]">
              {isCopied ? (
                  <BsCheck2 className="text-2xl md:text-[2.2rem] base:text-[2.5rem] xl:text-[8rem]" />
              ) : (
                  <BsCopy className="text-2xl md:text-[1.8rem] base:text-[2rem] xl:text-[8rem]" />
              )}
          </span>
      </button>
  );
};

export default EmailBtn;
