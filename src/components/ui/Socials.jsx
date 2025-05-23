import React from 'react';
import PropTypes from 'prop-types';

const socialLinks = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/dev-trishramos/' },
    { name: 'github', url: 'https://github.com/sandyFit' },
    { name: 'dev.to', url: 'https://dev.to/patricia_ramos_80cd5e115e' },
];

const SocialLink = ({ name, url }) => {
    // Check if name is a string and not undefined or null
    const splitName = typeof name === 'string' ? name.split('') : [];
    return (
        <a href={url} className="group relative w-full overflow-hidden text-xxsmall text-zinc-300">
            <span className="relative inline-flex">
                {splitName.map((char, index) => (
                    <span
                        key={index}
                        className={`duration-700 [transition-delay:${index * 0.02}s] 
                            group-hover:[transform:rotateY(360deg)] group-hover:text-[var(--secondary)]`}
                    >
                        {char}
                    </span>
                ))}
            </span>
        </a>
    );
};

SocialLink.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

const Socials = () => {

    return (
        <div className="w-full title-small">
            <ul className="w-full flex justify-between text-xxsmall text-zinc-300 uppercase">
                {socialLinks.map(({ name, url }) => (
                    <li key={name} className=''>
                        <a href={url} target='_blank'>
                            <SocialLink name={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Socials;
