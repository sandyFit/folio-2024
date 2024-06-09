
import React from 'react';

const MotionText = ({ text }) => {
    const repetitions = Array(3).fill(null);

    return (
        <div className="w-full h-3 z-10 flex justify-center items-center overflow-hidden">
            <h2 className="motion-text w-full">
                {repetitions.map((_, index) => (
                <span key={index} className="text-xxsmall-white mx-3">
                    {text}
                </span>
                ))}
            </h2>
        </div>
    );
};

export default MotionText;
