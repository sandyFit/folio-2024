import React from 'react';

const SeeMoreSmall = ({ isOpen, handleToggle }) => {
    return (
        <button onClick={handleToggle} className="relative">
            <svg
                className="item__icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="24"
                viewBox="0 0 37 34"
                fill="none"
                role="presentation"
            >
                <path
                    d="M6.1 2.2H2.9V31.8H6.1V33.4H0.9V0.599998H6.1V2.2ZM36.4594 0.599998V33.4H31.2594V31.8H34.4594V2.2H31.2594V0.599998H36.4594Z"
                    fill="#F1EEE9"
                ></path>
            </svg>
            <div className='rounded text-violet-500 relative'>
                {isOpen ? (
                    <span className='text-[2.9rem] absolute right-[.4rem] -bottom-[1rem]'>-</span> 
                ) : (
                        <span className='text-[1.5rem] absolute right-[.4rem] -bottom-[.2rem]'>+</span>
                )
                }
            </div>
        </button>
    );
};

export default SeeMoreSmall;
