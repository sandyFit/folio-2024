import React from 'react'

const Header = ({title}) => {
    return (
        <section className='w-full h-[80px] mt-9 lg:mt-12'>
            <div className="w-full grid grid-cols-4 place-content-between">
                <h3 className='xsm-title col-span-2 lg:col-span-3 col-start-1'>
                        {title}
                    </h3>
                <p className='xsm-title col-span-1 col-start-4 grid place-content-end'>
                    &copy;{new Date().getFullYear()}
                </p>               
            </div>

            <div className="absolute left-6 lg:left-16 top-[5rem] lg:top-[6.8rem] w-[86%] lg:w-[92%] 
                h-[2px] bg-zinc-800 transition-all duration-[var(--duration)] ease-[var(--ease)]"></div>
        </section>
    )
}

export default Header