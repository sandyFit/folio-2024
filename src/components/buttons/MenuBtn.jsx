import React from 'react';

const MenuBtn = ({ onClick, visible }) => {
    return (
        <div>
            <button onClick={onClick} className='grid grid-cols-1 xl:hidden w-16 ml-3 md:ml-6 base:ml-9 
                lg:ml-16 lg-md:ml-20'>
                <img src="/big-brackets.svg"
                    alt="square brackets"
                    className='col-span-1 col-start-1 row-start-1 flex justify-end items-end '/>
                <div className="flex flex-col gap-[6px] line-box col-span-1 col-start-1 row-start-1 
                    ml-[.38rem] mt-[.4rem]">
                    <span className={`line line-1 ${visible ? 'active' : ''}`}></span>
                    <span className={`line line-2 ${visible ? 'active' : ''}`}></span>
                    <span className={`line line-3 ${visible ? 'active' : ''}`}></span>
                </div>
            </button>
        </div>
    );
}

export default MenuBtn; 
