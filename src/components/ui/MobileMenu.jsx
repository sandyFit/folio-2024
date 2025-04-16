import React, { useContext } from 'react';
import NavItem from './NavItem';
import ColorBtn from '../buttons/ColorBtn';
import { GlobalContext } from '../../utils/globalContext';

const MobileMenu = ({ isMenuOpen }) => {
    const { switchTheme } = useContext(GlobalContext);

    return (
        <div
            className={`flex xl:hidden w-full h-[67vh] bg-[var(--primary)] absolute top-20 left-0 px-8 z-[100]
        ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
        >
            <article className="w-full relative flex">
                <ul
                    className="w-full flex flex-col justify-center items-center gap-2 xsm-title-mobile
          text-[var(--secondary)]"
                >
                    <li><NavItem to="index">index</NavItem></li>
                    <li><NavItem to="projects">projects</NavItem></li>
                    <li><NavItem to="info">info</NavItem></li>
                    <li><NavItem to="contact">contact</NavItem></li>
                    <li>
                        <a
                            href="/cv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer hover:text-[var(--accent)] transition-colors duration-300"
                        >
                            CV
                        </a>
                    </li>
                    <li>
                        <ColorBtn onClick={switchTheme} />
                    </li>
                </ul>
            </article>
        </div>
    );
};

export default MobileMenu;
