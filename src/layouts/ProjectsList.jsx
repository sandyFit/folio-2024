import React, { useState } from 'react';
import projects from '../data/projects';
import '../assets/css/borders.css';
import SeeMore from '../components/buttons/SeeMore';
import BottomLeftOutlineBtn from '../components/buttons/BottomLeftOutlineBtn';
import TopRightOutline from '../components/buttons/TopRightOutline';
import SeeMoreSmall from '../components/buttons/SeeMoreSmall';

const ProjectsList = () => {
    const [openProjectIndex, setOpenProjectIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenProjectIndex(openProjectIndex === index ? null : index);
    };

    return (
        <section
            id="projects-list"
            data-cursor-color="#d946ef"
            className="w-full mt-12 lg:mt-8 flex bg-zinc-950 relative"
        >
            <div className="w-full flex justify-start lg:justify-end gap-0 lg:gap-52 pb-12 lg:pb-16">
                <ul className="flex flex-col items-start lg:items-end relative w-[40%] lg:w-[40vw] projects">
                    {projects.map((project, index) => (
                        <li key={index} className={`flex flex-grow relative pb-12 ${openProjectIndex === index ? 'expanded' : ''}`}>
                            <div className="absolute left-0 top-0 w-full h-[1px] bg-cyan-300 transition-all 
                                duration-[var(--duration)] ease-[var(--ease)]"></div>
                            <div className="flex w-full cursor-pointer">
                                <div className="flex relative">
                                    <svg width="6rem" height="5rem" viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg"
                                        className='hidden lg:block'>
                                        <polygon points="0,0 60,0 60,50 15,50 0,34" style={{ fill: '#67e8f9', stroke: 'none', strokeWidth: 1 }} />
                                    </svg>

                                    <svg width="3.5rem" height="2.6rem" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg"
                                        className='block lg:hidden' preserveAspectRatio="xMidYMid meet">
                                        <polygon points="0,0 60,0 60,45 15,45 0,30" style={{ fill: '#67e8f9', stroke: 'none', strokeWidth: 1 }} />
                                    </svg>


                                    <div className="flex xsm-title-w absolute left-7 lg:left-[2.2rem] top-3 lg:top-2">
                                        {`00${index + 1}`}
                                    </div>
                                </div>
                                <div className="w-[65vw] lg:w-[44.6vw] flex flex-col items-start pt-4 lg:pt-5">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="w-full flex pl-1 lg:pl-6">
                                            <div className="flex w-full xsm-title z-[3] whitespace-nowrap">
                                                {project.title}
                                            </div>
                                        </div>
                                        <div className="hidden lg:flex">
                                            <SeeMore
                                                isOpen={openProjectIndex === index}
                                                handleToggle={() => handleToggle(index)}
                                            />
                                        </div>
                                        <div className="flex lg:hidden">
                                            <SeeMoreSmall
                                                isOpen={openProjectIndex === index}
                                                handleToggle={() => handleToggle(index)}
                                            />
                                        </div>
                                    </div>
                                    {openProjectIndex === index && (
                                        <div className="w-full lg:w-[90%] flex flex-col pl-1 lg:pl-6">
                                            <div className="w-full flex">
                                                <img
                                                    src="/img/hero.png"
                                                    alt="Radiant Website"
                                                    className='w-full bg-cover sticky top-16 left-[10%] 
                                                    py-[1.375rem]  z-[5]'
                                                />
                                            </div>
                                            <div className="flex flex-col justify-end w-full mt-auto ">
                                                <p className="w-full text-xsmall" dangerouslySetInnerHTML={{ __html: project.description }} />
                                                <h4 className="text-xsmall-white mt-6">Technologies:</h4>
                                                <p className="text-xsmall" dangerouslySetInnerHTML={{ __html: project.technologies }} />
                                            </div>
                                            <div className="w-full flex justify-end relative gap-1">
                                                <BottomLeftOutlineBtn/>
                                                <TopRightOutline/>
                                            </div>
                                        </div>
                                    )}
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
