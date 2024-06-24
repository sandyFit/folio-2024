import React from 'react';
import NavItem from './NavItem';

const MobileMenu = ({isMenuOpen}) => {
    return (
        <div className={`flex lg:hidden w-full h-[58vh] bg-cyan-300 absolute top-44 left-0  px-8
            ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>           
            <article 
                className="w-full relative flex">                         
                <ul className='w-full flex flex-col justify-center items-center gap-2 xsm-title-dark '>                                  
                    <NavItem to="projects">projects</NavItem>
                    <NavItem to="info">info</NavItem>
                    <NavItem to="contact">contact</NavItem>
                    <NavItem to="cv">CV</NavItem>                       
                </ul>
            </article>
        </div>
    )
}

export default MobileMenu;
