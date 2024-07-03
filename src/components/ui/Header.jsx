import React, { useEffect, useState } from 'react';
import MobileHeader from './MobileHeader';

const Header = ({ title }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='w-full h-[80px] flex justify-between pb-32'>
            <div className="w-full grid grid-cols-1 place-content-between mt-9 lg:mt-12 relative">
                {isMobile ? (
                    <MobileHeader title={title} />
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-12 place-content-between items-center w-full 
                        relative before:absolute before:h-[1px] before:bg-cyan-300 before:w-full before:top-12
                        before:lg:top-16">
                    
                        <h3 className='xsm-title col-span-1 lg:col-span-3 col-start-1'>
                            {title}
                        </h3>

                        <p className='xsm-title col-span-1 col-start-2 lg:col-start-12 grid place-content-end'>
                            2&copy;{new Date().getFullYear().toString().slice(-2)}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Header;
