import React, { useState } from 'react';
import MenuBtn from '../buttons/MenuBtn';
import MobileMenu from './MobileMenu';

const MobileHeader = ({ title }) => {
    const [visible, setVisible] = useState(false);
    const [isContact, setIsContact] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        toggleMenu();
        e.stopPropagation();
    };

    const toggleMenu = () => {
        setVisible(!visible);
    };

    return (
        <section className='w-full h-[80px] pb-32'>
            <div className="w-full grid grid-cols-1 mt-2 relative">
                <div className="grid grid-cols-2 xl:grid-cols-12 place-content-between items-center w-full relative 
                    before:absolute before:h-[1px] before:bg-[var(--secondary)] before:w-full before:-top-2
                        before:lg:-top-2 animate-text after:absolute after:h-[1px] after:bg-[var(--secondary)] 
                        after:w-full after:top-12 after:lg:top-[3.5rem] animate-text">
                    
                    <h3 className='xsm-title text-[var(--secondary)] col-span-1 xl:col-span-3 col-start-1 
                        row-start-1'>
                        {title}
                    </h3>

                    {isContact ? (
                        <p className='xsm-title col-span-1 col-start-2 xl:col-start-12 grid place-content-end'>
                            2&copy;{new Date().getFullYear().toString().slice(-2)}
                        </p>
                    ) : (
                            <span className="w-full col-span-1 col-start-2 flex justify-end row-start-1 ml-8 
                                ">
                                <MenuBtn onClick={handleClick} visible={visible} />
                                <MobileMenu isMenuOpen={visible} />
                            </span>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MobileHeader;
