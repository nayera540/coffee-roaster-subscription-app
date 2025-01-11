import { NavLink } from 'react-router';
import styles from './Footer.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer className={`flex justify-between items-center md:flex-row flex-col md:py-0 py-[1rem] md:gap-0 gap-[0.2rem]  ${styles["footer"]}`}>
            <NavLink to="/" className="site-logo">
                <img src='/images/shared/desktop/footer-logo.svg' />
            </NavLink>
            <div className={`nav-links-container font-barlow text-[0.8rem] font-bold ${styles["nav-links-container"]}`}>
                <ul className='md:flex md:flex-row hidden gap-[2rem]'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-[#ffff]' : 'text-[#83888f]')}
                        >
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'text-[#ffff]' : 'text-[#83888f]')}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/plan"
                            className={({ isActive }) => (isActive ? 'text-[#ffff]' : 'text-[#83888f]')}
                        >
                            Create your plan
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`social-links flex md:gap-[1.5rem] gap-[1rem] ${styles["social-links"]}`}>
                <a href="">
                    <FacebookIcon />
                </a>
                <a href="">
                    <TwitterIcon />
                </a>
                <a href="">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer
