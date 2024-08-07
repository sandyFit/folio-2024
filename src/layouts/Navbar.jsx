import React, { useState } from 'react';
import '../assets/css/borders.css';
import MobileMenu from '../components/ui/MobileMenu';
import NavItem from '../components/ui/NavItem';
import MenuBtn from '../components/buttons/MenuBtn';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        toggleMenu();
        console.log('clicked');
        e.stopPropagation();
    };

    const toggleMenu = () => {
        setVisible(!visible);
    };

    return (
        <section className='w-full h-[80px] absolute top-0 z-20 flex justify-between px-6 md:px-10
            base:px-12 xl-sm:px-16'>
            <div className="w-full grid grid-cols-1 place-content-between mt-9 xl:mt-12 relative">
                <div className="grid grid-cols-12 place-content-between items-center w-full relative 
                    before:absolute before:h-[1px] before:bg-cyan-300 before:w-full before:top-12 
                    before:lg:top-[3.6rem] before:xl:top-16">
                    <h3 className='xsm-title col-span-6 xl:col-span-3 col-start-1 row-start-1'>
                        Trish Ramos
                    </h3>

                    <div className='hidden lg-lg:flex col-span-5 col-start-9 w-full relative justify-end'>
                        <ul className="flex justify-between gap-2 xsm-title">
                            <NavItem to="projects">projects,</NavItem>
                            <NavItem to="info">info,</NavItem>
                            <NavItem to="contact">contact,</NavItem>
                            <NavItem to="cv">CV</NavItem>
                        </ul>
                    </div>

                    <div className="flex lg-lg:hidden col-span-1 col-start-11 row-start-1 ">
                        <MenuBtn onClick={handleClick} visible={visible} />
                        <div className="flex">
                            <MobileMenu isMenuOpen={visible} />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Navbar;
