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
        <section className='w-full h-[80px] absolute top-0 z-20 flex justify-between px-6 sm:px-8 md:px-12 2xl:px-16'>
            <div className="w-full grid grid-cols-1 place-content-between mt-9 lg:mt-12">
                <div className="grid grid-cols-12 place-content-between items-center w-full relative ">
                    <h3 className='xsm-title col-span-6 lg:col-span-3 col-start-1 row-start-1'>
                        Trish Ramos
                    </h3>

                    <div className='hidden lg:flex col-span-5 col-start-9 w-full relative justify-end'>
                        <ul className="flex justify-between gap-2 xsm-title">
                            <NavItem to="projects">projects,</NavItem>
                            <NavItem to="info">info,</NavItem>
                            <NavItem to="contact">contact,</NavItem>
                            <NavItem to="cv">CV</NavItem>
                        </ul>
                    </div>

                    <div className="flex lg:hidden col-span-1 col-start-11 row-start-1 ">
                        <MenuBtn onClick={handleClick} visible={visible} />
                        <div className="flex">
                            <MobileMenu isMenuOpen={visible} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-6 lg:left-16 top-[5rem] lg:top-[6.8rem] w-[86%] lg:w-[92%] h-[2px] 
                bg-zinc-800 "></div>
        </section>
    );
}

export default Navbar;
