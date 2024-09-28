import React, { useEffect, useState } from 'react';
import MobileHeader from './MobileHeader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Header = ({ title, sectionId }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

    useEffect(() => {
        let resizeTimeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setIsMobile(window.innerWidth < 850);
                ScrollTrigger.refresh();
            }, 150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // GSAP animation for each header
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${sectionId}`,
                start: 'top bottom',
                end: 'top top+=60',
                scrub: .6,
                toggleActions: 'play none none reverse',
                once: true
            },
        });

        tl.fromTo(
            `#${sectionId} .text`, 
            { xPercent: -40, autoAlpha: 0 }, 
            { xPercent: 0, autoAlpha: 1, duration: .5 }
        )
        .fromTo(
            `#${sectionId} .date`, 
            { xPercent: 40, autoAlpha: 0 }, 
            { xPercent: 0, autoAlpha: 1, duration: .5 },
            '<'
        );

        return () => {
            // Clean up ScrollTrigger and animations
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [sectionId]);

    return (
        <section className='w-full h-[80px] flex justify-between pb-32'>
            <div className="w-full grid grid-cols-1 place-content-between mt-9 lg:mt-12 relative">
                {isMobile ? (
                    <MobileHeader title={title} />
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-12 place-content-between items-center w-full 
                        relative before:absolute before:h-[1px] before:bg-[var(--secondary)] before:w-full before:top-1
                        before:lg:-top-2 animate-text after:absolute after:h-[1px] after:bg-[var(--secondary)] 
                        after:w-full after:top-12 after:lg:top-16 animate-text ">
                    
                        <h3 className='xsm-title text-[var(--secondary)] col-span-1 lg:col-span-3 col-start-1 text'>
                            {title}
                        </h3>

                        <p className='xsm-title text-[var(--secondary)] col-span-1 col-start-2 lg:col-start-12 
                            grid place-content-end date'>
                            2&copy;{new Date().getFullYear().toString().slice(-2)}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Header;
