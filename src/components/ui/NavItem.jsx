import { Link } from 'react-router-dom';
import React from 'react';

const NavItem = ({ to, children }) => {
    // Function to generate unique transition delay for each character
    const generateTransitionDelay = (index) => `${index * 0.02}s`;

    return (
        <Link to={to} className="group relative overflow-hidden nav-item">
            <span className="relative inline-flex">
                {children.split('').map((char, index) => (
                    <span
                        key={index}
                        className={`duration-700 [transition-delay:${index * 0.02}s] 
                        group-hover:[transform:rotateY(360deg)] group-hover:text-zinc-300`}
                    >
                        {char}
                    </span>
                ))}
            </span>
        </Link>
    );
};

export default NavItem;