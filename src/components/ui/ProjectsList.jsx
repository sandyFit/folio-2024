import React, { useEffect, useRef, useState } from 'react';
import projects from '../../data/projects';
import '../../assets/css/borders.css';
import BottomLeftOutlineBtn from '../buttons/BottomLeftOutlineBtn';

import LiveDemoToast from './LiveDemoToast';


const ProjectsList = () => {



    return (
        <section
            id="projects-list"
            className="w-full mt-12 lg:mt-8 flex relative">
            <div className="w-full flex justify-start lg-md:justify-end pb-12 xl:pb-16">
                <ul className="w-full flex flex-col items-start lg-md:items-end relative projects">
                    {projects.map((project, index) => (
                        <li key={index}
                            className='flex flex-grow relative pb-12 w-full'> {/* Added w-full */}
                            <div className="absolute left-0 top-0 w-full h-[1px] bg-[var(--secondary)] transition-all 
                                duration-[var(--duration)] ease-[var(--ease)]"></div>
                            <div className="flex w-full">
                                <div className="flex-none"> {/* Changed to flex-none for SVG container */}
                                    <svg width="6rem" height="5rem" viewBox="0 0 60 50"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='hidden 2xl-xl:block' preserveAspectRatio="xMidYMid meet">
                                        <polygon points="0,0 60,0 60,50 15,50 0,34"
                                            style={{ fill: 'var(--secondary)', stroke: 'none', strokeWidth: 1 }} />
                                    </svg>
                                    <svg width="3.2rem" height="2.3rem" viewBox="0 0 60 45"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='block 2xl-xl:hidden w-[3.2rem] h-[2.3rem] md:w-[4rem] md:h-[3rem] 
                                            lg:w-[5rem] lg:h-[3.8rem]'
                                        preserveAspectRatio="xMidYMid meet">
                                        <polygon points="0,0 60,0 60,45 15,45 0,30"
                                            style={{ fill: 'var(--secondary)', stroke: 'none', strokeWidth: 1 }} />
                                    </svg>
                                    <div className="flex title-h4-xs text-[var(--primary)] absolute left-4 md:left-5 
                                        lg:left-[1.8rem] 2xl-xl:left-[2.2rem] top-1 lg:top-2">
                                        {`00${index + 1}`}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col px-6 pt-3"> 
                                    <div className="w-full flex justify-between items-center"> {/* Title and buttons row */}
                                        <p className="sm-title text-[var(--secondary)] z-[3]">
                                            {project.title}
                                        </p>
                                        <div className="flex gap-1">
                                            <BottomLeftOutlineBtn btnHref={project.code} />
                                            <LiveDemoToast />
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col mt-4">
                                        <div className="w-full flex flex-col">
                                            <div className="w-full flex">
                                                <img
                                                    src={project.imgSrc}
                                                    alt={project.title}
                                                    className='w-full bg-cover  
                                                    py-[1.375rem] z-[5]'
                                                />
                                            </div>
                                            <div className="flex flex-col justify-end w-full mt-auto">
                                                <p className="w-full text-xsmall"
                                                    dangerouslySetInnerHTML={{ __html: project.description }} />
                                                <p className="text-xxsmall text-white pt-2"
                                                    dangerouslySetInnerHTML={{ __html: project.technologies }} />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsList;

