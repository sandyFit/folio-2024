import React, { useState, useEffect } from 'react'

const TimeZone = () => {

    const [currentTime, setCurrentTime] = useState('');

    const getCurrentTimeWithTimezone = () => {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit',
            hour12: true, // Ensure we get AM/PM
        };
        // Bogotá is in the GMT-5 timezone. Adjust if necessary for daylight saving time elsewhere.
        const timeZone = 'America/Bogota';
        const formatter = new Intl.DateTimeFormat('en-US', { ...options, timeZone });
        // Manually constructing the label for Bogotá GMT-5. Adjust the label as needed.
        const formattedTime = formatter.format(now);
        // Optional: Calculate the GMT offset dynamically if needed for other time zones.
        // For Bogotá, we're hardcoding it as GMT-5.
        return formattedTime;
    };


    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(getCurrentTimeWithTimezone());
        }
            // Update the time display immediately upon component mount
            updateTime();

            // Set interval to update every second (or any other interval you prefer)
            const intervalId = setInterval(updateTime, 1000); // 1000 milliseconds for every second

            // Cleanup interval on component unmount
            return () => clearInterval(intervalId);
        
    }, [])
    
    return (
        <article>
            
            <div className='flex w-full text-xxsmall uppercase text-[var(--secondary)]'
                id='currentTime'>
                <p className='hidden lg-xl:block tracking-wider mr-2'>local time:</p>
                <span className='text-xxsmall text-zinc-300 uppercase whitespace-nowrap'>{currentTime} gmt-5</span>
                
            </div>
        </article>
    )
}

export default TimeZone