import { NavLink } from "react-router";
import styles from "./Header.module.scss";
import { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function menuTrigger() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header
            className={`py-[2.75rem] flex items-center justify-between ${styles["site-header"]}`}
        >
            <NavLink className="site-logo" to="/">
                <img src="/images/shared/desktop/logo.svg" alt="site logo" />
            </NavLink>
            <button className="menu-btn md:hidden block z-10" onClick={menuTrigger}>
                {isMenuOpen ? (
                    <img
                        src="/images/shared/mobile/icon-close.svg"
                        alt="close-menu btn"
                        className="transform transition-transform duration-400 rotate-90 z-[10]"
                    />
                ) : (
                    <img
                        src="/images/shared/mobile/icon-hamburger.svg"
                        alt="open-menu btn"
                        className="transform transition-transform duration-400 rotate-0 z-[10]"
                    />
                )}
            </button>
            <nav
                className={`nav-links md:flex md:static md:w-auto w-full h-full absolute top-0 left-0 bg-nav-custom-background  md:bg-none z-[5] md:z-auto transition-transform duration-400 ${isMenuOpen ? "block" : "hidden"
                    }`}
            >
                <ul
                    className={`flex flex-col md:flex-row items-center justify-center md:justify-between md:font-barlow font-fraunces md:gap-[2.063rem] 
        tracking-[.923px] leading-[0.938rem] md:text-[0.75rem] md:uppercase font-bold gap-[2rem]
                        }`}
                >
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-[#333D4B]' : '')}
                        >
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'text-[#333D4B]' : '')}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/plan"
                            className={({ isActive }) => (isActive ? 'text-[#333D4B]' : '')}
                        >
                            Create your plan
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;
