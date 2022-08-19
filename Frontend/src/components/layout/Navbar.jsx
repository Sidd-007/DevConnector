import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
// import useDarkMode from '../../hooks/useDarkMode';
// import DarkModeToggle from "react-dark-mode-toggle";


const Navbar = ({ auth: { isAuthenticated }, logout }) => {
    const [show, setShow] = useState(false);
    const authLinks = (
        <div className='text-lg font-semibold'>
            <Link to="/profiles" className='mr-5'>Developers</Link>

            <Link to="/posts" className='mr-5'>Posts</Link>

            <a onClick={logout} href="#!" className='mr-5'>
                <span className="hide-sm">Logout</span>
            </a>
        </div>
    );

    const guestLinks = (
        <div className='text-lg font-semibold'>
            <Link to="/login" className='mr-5'>Login</Link>
            <Link to="/register" className='mr-5'>SignUp</Link>
        </div>

    );

    return (
        <nav className="font-raleway w-full dark:text-[#A5ABE7] text-[#3F4581] dark:bg-[#171717]">
            <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                <Link to="/">
                <svg width="52" height="52" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0202 33.3952C8.82765 35.3576 -0.82132 36.0118 0.0557929 23.583V8.21065C0.0557929 1.01506 5.31891 -0.238712 7.95047 0.033848H38.3009C52.0932 1.00967 77.0251 15.7226 71.1074 44.1886C69.7467 50.9341 61.4785 69.2886 38.3009 71.9897H34.0904H9.52939C9.35395 71.9897 0.933031 72.513 0.933031 66.1024V59.7245C1.63477 48.0807 12.5703 40.1547 17.9503 37.6471L20.7573 40.2637L19.1784 46.3145C25.972 45.9813 28.6837 44.2496 30.5817 36.993C40.1864 34.5236 44.2129 30.8395 48.827 21.9477C39.0922 19.7906 33.993 20.3982 25.4941 23.9101C21.5821 21.5236 11.6141 22.2197 8.82765 28.162L16.0202 30.4515V33.3952Z" fill="url(#paint0_linear_9_56)" />
                    <path d="M7.95047 39.9366C7.47444 39.4371 7.23982 39.1327 6.54698 38.4648V36.5024C4.85884 36.8709 3.32178 38.2458 2.33652 40.2637C4.97693 41.0653 6.12211 40.9408 7.95047 39.9366Z" fill="url(#paint1_linear_9_56)" />
                    <path d="M31.9293 29.7635C31.0076 28.8184 31.0076 27.438 31.9293 26.4928C32.9432 25.4532 34.775 25.4532 35.7889 26.4928C36.7106 27.438 36.7106 28.8184 35.7889 29.7635C34.775 30.8032 32.9432 30.8032 31.9293 29.7635Z" fill="url(#paint2_linear_9_56)" />
                    <defs>
                        <linearGradient id="paint0_linear_9_56" x1="50.701" y1="12.2652" x2="5.904" y2="72.8958" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8A46D7" />
                            <stop offset="0.501169" stop-color="#7433D5" />
                            <stop offset="1" stop-color="#6027BF" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_9_56" x1="50.701" y1="12.2652" x2="5.904" y2="72.8958" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8A46D7" />
                            <stop offset="0.501169" stop-color="#7433D5" />
                            <stop offset="1" stop-color="#6027BF" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_9_56" x1="50.701" y1="12.2652" x2="5.904" y2="72.8958" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#8A46D7" />
                            <stop offset="0.501169" stop-color="#7433D5" />
                            <stop offset="1" stop-color="#6027BF" />
                        </linearGradient>
                    </defs>
                </svg>
                </Link>
                <div>
                    <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                        <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={8} x2={20} y2={8} />
                            <line x1={4} y1={16} x2={20} y2={16} />
                        </svg>
                    </button>
                    <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                        <button onClick={() => setShow(!show)} className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                            <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </button>
                        <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white dark:bg-[#171717] md:bg-transparent z-20">
                            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
                        </ul>
                    </div>
                </div>
                {/* <ThemeIcon /> */}
            </div>
        </nav>
    );
};

// const ThemeIcon = () => {
//     const [darkTheme, setDarkTheme] = useDarkMode();
//     return (
//         <DarkModeToggle
//             onChange={setDarkTheme}
//             checked={darkTheme}
//             size={50}
//         />
//     );
// };




Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
