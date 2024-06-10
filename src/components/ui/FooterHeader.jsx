import React from 'react'

const FooterHeader = () => {
    return (
        <section className='w-full h-[80px] '>
            <div className="w-full flex justify-between">
                <h2 className='title-h2'>
                    Trish Ramos
                </h2>
                <p className='title-h2'>
                    &copy;{new Date().getFullYear()}
                </p>               
            </div>

            
        </section>
    )
}

export default FooterHeader