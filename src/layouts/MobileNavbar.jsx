import React, { useState, useEffect } from 'react';
import MenuBtn from '../components/buttons/MenuBtn';
import MobileMenu from '../components/ui/MobileMenu';

const MobileNavbar = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        toggleMenu();
        e.stopPropagation();
    };

    const toggleMenu = () => {
        setVisible(!visible);
    };

    
    return (
        <section className='w-full h-[120px] sticky top-0 z-[20] flex justify-between px-6 md:px-10 base:px-12 pt-16
            transition-transform duration-300 bg-zinc-950 border-[1px] border-zinc-600'>
            <div className="flex justify-between  w-full relative 
                    before:lg:top-[3.6rem] before:xl:top-16">
                <h3 className='xsm-title w-full'>Trish Ramos</h3>                   

                <div className="w-full flex justify-end xl:hidden ">
                    <MenuBtn onClick={handleClick} visible={visible} />
                    <MobileMenu isMenuOpen={visible} />
                </div>
            </div>
        </section>
    )
}

export default MobileNavbar;
