import React from 'react'

const MobileColorBtn = () => {
    return (
        <button className='grid grid-cols-1 w-10 h-10 bg-zinc-950 place-content-center place-items-center'>
            <img src="/square-brackets.svg" alt="square brackets" className='col-span-1 col-start-1
                 row-start-1 '/>
            <div className="flex col-span-1 col-start-1 row-start-1 ">
                <span className='w-[.8rem] h-[.9rem] rounded bg-cyan-300 '></span>
            </div>
        </button>
    )
}

export default MobileColorBtn