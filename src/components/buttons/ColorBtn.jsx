import React from 'react'

const ColorBtn = () => {
    return (
        <button className='grid grid-cols-1 w-16 xl:w-20 '>
            <img src="/big-brackets.svg" alt="square brackets" className='col-span-1 col-start-1
                 row-start-1 flex justify-end items-end '/>
            <div className="flex col-span-1 col-start-1 row-start-1 ml-[.66rem] mt-2">
                <span className='w-[1rem] h-[1.1rem] rounded bg-cyan-300 '></span>
            </div>
        </button>
    )
}

export default ColorBtn