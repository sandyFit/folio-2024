import { useState } from "react";
import TopRightOutline from "../buttons/TopRightOutline";

const LiveDemoToast = () => {
    const [showToast, setShowToast] = useState(false);

    const handleClick = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    };

    return (
        <div className="relative">
            <TopRightOutline  onClick={handleClick} />

            {showToast && (
                <div className="absolute top-14 right-0 z-50 w-72 bg-white text-gray-800 p-4 rounded-xl shadow-xl border border-green-200 animate-fade-in-out">
                    <h4 className="font-bold text-lg">🍽️ FoodSaver is Almost Ready!</h4>
                    <p className="text-sm mt-1">
                        This project isn't live just yet — but the ingredients are coming together.
                        <br />
                        <span className="font-semibold">Stay tuned!</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default LiveDemoToast;
