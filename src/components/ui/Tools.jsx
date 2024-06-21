import React, { useState } from 'react';
import '../../assets/css/borders.css';

const tools = [
    { name: 'Figma', description: 'a collaborative interface design tool that enables teams to create, test, and ship better designs from start to finish.' },
    { name: 'Sass/SCSS', description: 'a preprocessor scripting language that is interpreted or compiled into CSS, allowing for more efficient and reusable styles.' },
    { name: 'JavaScript', description: 'a versatile programming language that allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.' },
    { name: 'TypeScript', description: 'a superset of JavaScript that adds static typing, making it easier to catch errors early and improve code quality.' },
    { name: 'React.js', description: 'a JavaScript library for building user interfaces, especially single-page applications where you need a fast, interactive user experience.' },
    { name: 'Next.js', description: 'a React framework that enables server-side rendering and static site generation for building highly optimized, SEO-friendly web applications.' },
    { name: 'GSAP', description: 'a high-performance JavaScript library for creating complex animations and transitions with ease and precision.' },
    { name: 'WebGL', description: 'a JavaScript API for rendering 2D and 3D graphics within any compatible web browser without the use of plug-ins.' },
    { name: 'Prismic', description: 'a headless CMS that allows you to manage your content in a repository and distribute it via an API to any platform.' },
    { name: 'AWS/Vercel', description: 'Amazon Web Services, a comprehensive and widely adopted cloud platform offering over 200 fully featured services from data centers globally.' },
    { name: 'Webflow', description: 'a visual web development platform that allows users to design, build, and launch responsive websites without writing code. It includes built-in hosting, CMS, and e-commerce functionalities.' },
    { name: 'After Effects', description: 'a digital visual effects, motion graphics, and compositing application used for creating cinematic movie titles, intros, and transitions.' }
];

const Tools = () => {
    const [clickedToolIndex, setClickedToolIndex] = useState(null);

    const handleClick = (index) => {
        setClickedToolIndex(index);
    };

    return (
        <div className='relative ml-4 mb-10 flex justify-center'>
            <div className='flex flex-wrap justify-items-center relative mt-28 gap-x-4 gap-y-2'>
                {tools.map((tool, index) => (
                    <div key={index} className='text-xxsmall-min'>
                        <button
                            onClick={() => handleClick(index)}
                            className={`text-xsmall-dark bg-cyan-300 w-[11rem] py-3 flex justify-center 
                            items-center hover:bg-zinc-50 whitespace-nowrap
                            ${index % 2 === 0 ? 'next-btn' : 'main-btn'}`}
                        >
                            {tool.name}
                        </button>
                        {clickedToolIndex === index && (
                            <div className="w-full text-xsmall absolute left-1 -top-20 pr-3">
                               {` ${tool.name } is ${tool.description}`}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;
