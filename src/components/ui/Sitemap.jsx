import React from 'react';
import { Link } from 'react-scroll';

const links = [
    { name: 'index' },
    { name: 'projects' },
    { name: "info" },
    { name: "read cv" },
    
];

const formatLinkName = (name) => name.replace(/-/g, ' ');

const SiteLink = ({ name }) => (
    <Link
        to={name}
        className="w-full group relative overflow-hidden text-xxsmall text-zinc-300 cursor-pointer"
    >
        <span className="relative inline-flex">
            {formatLinkName(name).split('').map((char, index) => (
                <span
                    key={index}
                    className={`duration-700 [transition-delay:${index * 0.02}s] 
                    group-hover:[transform:rotateY(360deg)] group-hover:text-[var(--secondary)]`}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    </Link>
);

const Sitemap = () => {


    return (
        <div className="w-full flex">
            <ul className="w-full flex uppercase justify-between "
            >
                {links.map(({ name }) => (
                    <li key={name} className=''>
                        <SiteLink name={name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sitemap;
