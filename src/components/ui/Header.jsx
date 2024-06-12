import React from 'react'

const Header = ({title}) => {
    return (
        <section className='w-full h-[80px] mt-12'>
            <div className="w-full flex justify-between">
                <h2 className='xsm-title'>
                    {title}
                </h2>
                <p className='xsm-title'>
                    &copy;{new Date().getFullYear()}
                </p>               
            </div>

            <div className="absolute left-16 top-[7.6rem] w-[92%] h-[2px] bg-zinc-800 transition-all 
                        duration-[var(--duration)] ease-[var(--ease)]"></div>
        </section>
    )
}

export default Header