import React from 'react';

const MenuBtn = ({ onClick, visible }) => {
    return (
        <div>
            <button onClick={onClick} className='block lg:hidden w-20 ml-2 md:ml-5'>
                <img src="/big-brackets.svg" alt="square brackets" />
                <div className="flex flex-col gap-[6px] line-box absolute bottom-[.9rem] right-2 md:right-[.46rem]">
                    <span className={`line line-1 ${visible ? 'active' : ''}`}></span>
                    <span className={`line line-2 ${visible ? 'active' : ''}`}></span>
                    <span className={`line line-3 ${visible ? 'active' : ''}`}></span>
                </div>
            </button>
        </div>
    );
}

export default MenuBtn;
