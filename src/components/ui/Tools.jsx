import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Tools() {
    const tools = [
        { name: 'JavaScript Frameworks & Libraries', description: '∎ React.js ∎ Next.js ' },
        { name: 'Application Programming Interface (APIs)', description: '∎ RESTful ∎ GraphQL ' },
        { name: 'Markup & Static Site Generators', description: '∎ HTML5 ∎ CSS3 ∎ SASS ∎ Gatsby ' },
        { name: 'Version Control', description: '∎ Git ∎ GitHub ' },
        { name: 'Build Tools & Package Managers', description: '∎ Webpack ∎ Vite ∎ npm ∎ yarn' },
        { name: 'Design Systems & UI Frameworks', description: '∎ Material-UI ∎ Tailwind CSS' },
        { name: 'Testing & Quality Assurance', description: '∎ Jest ∎ Vitest' },
        { name: 'Deployment & Hosting', description: '∎ Netlify ∎ Vercel ∎ AWS' },
        { name: 'Content Management Systems (CMS)', description: '∎ Prismic ∎ Contentful' },
        { name: 'Performance Optimization', description: '∎ lazy loading  ∎ image opt' },
        { name: 'Design tools', description: '∎ Figma  ∎ Adobe Suite' },
        { name: 'No code tools', description: '∎ Framer  ∎ Webflow' }
    ];

    const toolsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        toolsRef.current.forEach((tool, index) => {
            gsap.fromTo(
                tool,
                { x: 300, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: .6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: tool,
                        start: 'center bottom',
                        toggleActions: 'play none none none',
                    },
                    delay: index * 0.1  // Apply a delay based on the index of each item
                }
            );
        });
    }, []);

    return (
        <ul className='w-full'>
        {tools.map((tool, index) => (
            <li
            key={index}
            ref={el => toolsRef.current[index] = el}
                className='border-t-[1px] border-[var(--secondary)] flex flex-col w-full overflow-hidden relative 
                    cursor-pointer py-2 hover:bg-gradient-to-l from-[var(--primary)] to-[var(--secondaryHover)]
                    last:border-b-[1px]' >
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 '>
                    <button className="group relative inline-flex overflow-hidden duration-1000 ease-in-out 
                        col-span-1 lg:col-span-2 col-start-1 row-start-1 title-h5-inter">
                        <div className={`-translate-x-0 transition ease-in-out group-hover:translate-x-[410%]`}>
                            &nbsp; {tool.name}
                        </div>
                        <div className="absolute -translate-x-[380%] transition ease-in-out group-hover:translate-x-0">
                            &nbsp; {tool.name}
                        </div>
                    </button>

                    <p className='text-xxsmall-cyan text-[var(--secondary)] uppercase col-span-1 col-start-1 
                        lg:col-start-3 row-start-2 lg:row-start-1 flex justify-end text-right mt-2 pb-1 lg:pb-0'>
                        {tool.description}
                    </p>
            </div>

            </li>
        ))}
        </ul>
    );
}

export default Tools;
