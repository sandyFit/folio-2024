import React from 'react';
import NavItem from './NavItem';

const MobileMenu = ({ isMenuOpen }) => {
    return (
        <div className={`flex xl:hidden w-full h-[67vh] bg-cyan-300 absolute top-20 left-0 px-8 z-[100]
            ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>           
            <article className="w-full relative flex">                         
                <ul className='w-full flex flex-col justify-center items-center gap-2 xsm-title-dark '>                                  
                    <NavItem to="index">index</NavItem>
                    <NavItem to="projects">projects</NavItem>
                    <NavItem to="info">info</NavItem>
                    <NavItem to="contact">contact</NavItem>
                    <NavItem to="cv">CV</NavItem>                       
                </ul>
            </article>
        </div>
    );
}

export default MobileMenu;
