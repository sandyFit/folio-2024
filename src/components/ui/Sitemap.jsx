import React from 'react';
import { Link } from 'react-scroll';

const links = [
    { name: 'index' },
    { name: 'projects' },
    { name: 'info' },
    { name: 'read cv' },
];

const formatLinkName = (name) => name.replace(/-/g, ' ');

const SiteLink = ({ name }) => {
    const isExternal = name === 'read cv';

    const content = (
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
    );

    return isExternal ? (
        <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group relative overflow-hidden text-xxsmall text-zinc-300 cursor-pointer"
        >
            {content}
        </a>
    ) : (
        <Link
            to={name}
            smooth={true}
            duration={500}
            offset={-80}
            className="w-full group relative overflow-hidden text-xxsmall text-zinc-300 cursor-pointer"
        >
            {content}
        </Link>
    );
};

const Sitemap = () => {
    return (
        <div className="w-full lg-sm:w-[80%] lg-xl:w-[85%] 3xl-sm:w-[65%] flex">
            <ul className="w-full flex uppercase justify-between">
                {links.map(({ name }) => (
                    <li key={name}>
                        <SiteLink name={name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sitemap;
