import React from 'react'

const PageNotFound = () => {

    return (
        <section className='w-full min-h-screen flex flex-col justify-center items-start relative'>
            <div border-cut="top-right-black"               
                className="w-full flex flex-col items-start px-6 md:px-10 base:px-12 xl-sm:px-16 flex-grow">
                <section className='pt-48'>                   
                    <h2 className='title-h2'>
                        404 error/
                    </h2>
                    <p className='w-[35%] text-xxsmall mt-4'>
                        It seems this page took a vacation or got lost. Maybe the address was a bit off.
                        Try checking the URL or head
                        <a href="mailto:sandy07r@gmail.com"
                            className="relative text-cyan-300 font-[400] after:absolute after:bottom-0 
                            after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom
                            after:scale-x-0 after:bg-cyan-300 after:transition-transform
                            after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                            hover:after:origin-bottom hover:after:scale-x-100 not-italic
                            ml-2">
                            back to the homepage
                        </a>.                       
                    </p>
                    <h1 className='big-title mt-20'>
                        page not found
                    </h1>
                </section>
                
            </div>
            <footer className="mt-auto w-full h-[6rem] lg:h-[7rem] xl:h-[3rem] bg-zinc-900 px-6 xl:px-16 py-4
                flex justify-between">
                <p className='text-xxsmall-white'>
                    <a href="/">Back to Homepage</a>
                </p>
                <p className='text-xxsmall-white'>
                    <a href="/">Back to Homepage</a>
                </p>
                <p className='text-xxsmall-white'>
                    <a href="/">Back to Homepage</a>
                </p>
            </footer>
        </section>
    )
}

export default PageNotFound