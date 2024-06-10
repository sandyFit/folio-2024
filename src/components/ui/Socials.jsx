import React from 'react';
import PropTypes from 'prop-types';

const socialLinks = [
    { name: 'linkedin', url: 'https://www.linkedin.com/feed/' },
    { name: 'github', url: 'https://github.com/sandyFit' },
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'behance', url: 'https://behance.com' },
];

const SocialLink = ({ name, url }) => {
    // Check if name is a string and not undefined or null
    const splitName = typeof name === 'string' ? name.split('') : [];
    return (
        <a href={url} className="group relative w-full overflow-hidden text-zinc-400">
            <span className="relative inline-flex">
                {splitName.map((char, index) => (
                    <span
                        key={index}
                        className={`duration-700 [transition-delay:${index * 0.02}s] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-violet-500`}
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
        <div className="w-[85vw] lg:w-full flex title-small">
            <ul className="w-full flex text-xsmall-white uppercase justify-between"
            >
                {socialLinks.map(({ name, url }) => (
                    <li key={name} className=''>
                        <SocialLink name={name} url={url}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Socials;
