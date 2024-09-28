import React from 'react'
import GoToHomeBtn from '../components/buttons/GoToHomeBtn'

const PageNotFound = () => {

    return (
        <section className='w-full min-h-screen flex flex-col justify-center items-start relative'>
            <div className="w-full flex flex-col items-center px-6 md:px-10 base:px-12 xl-sm:px-16 flex-grow">
                <section className='pt-48 relative'>                   
                    <h2 className='title-h2'>
                        404 error/
                    </h2>
                    <p className='w-[28%] text-xxsmall text-zinc-300 mt-4 text-justify'>
                        It seems this page took a vacation or got lost. Maybe the address was a bit off.
                        Try checking the URL or head
                        <a href="/"
                            className="relative text-[var(--secondary)] font-[400] after:absolute after:-bottom-1 
                            after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom
                            after:scale-x-0 after:bg-[var(--secondary)] after:transition-transform
                            after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                            hover:after:origin-bottom hover:after:scale-x-100 not-italic
                            ml-1">
                            back to the homepage
                        </a>.                       
                    </p>
                    <h1 className='big-title text-[var(--secondary)] mt-20'>
                        This Page Went MIA
                    </h1>
                    {/* <span className='text-[13rem] absolute bottom-12 -right-72'>👻</span> */}
                </section>
                
            </div>
            <footer className="mt-auto w-full h-[6rem] lg:h-[7rem] xl:h-[3rem] bg-zinc-900 px-6 xl:px-16 py-4
                flex justify-between text-xxsmall text-zinc-300 tracking-widest">
                <GoToHomeBtn/>
                <GoToHomeBtn/>
                <GoToHomeBtn/>
            </footer>
        </section>
    )
}

export default PageNotFound