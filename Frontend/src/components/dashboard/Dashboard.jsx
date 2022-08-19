import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import { MdDeleteForever } from 'react-icons/md'
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile }
}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <section className='h-auto'>
            <div className=' dark:text-gray-300'>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto font-raleway mt-3">
                    <div className="relative bg-indigo-200 p-2 sm:p-6 rounded-sm overflow-hidden mb-5">
                        <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
                            <svg width="330" height="200" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
                                    <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
                                    <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                                        <stop stopColor="#A5B4FC" offset="0%" />
                                        <stop stopColor="#818CF8" offset="100%" />
                                    </linearGradient>
                                    <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                                        <stop stopColor="#4338CA" offset="0%" />
                                        <stop stopColor="#6366F1" stopOpacity="0" offset="100%" />
                                    </linearGradient>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                    <g transform="rotate(64 36.592 105.604)">
                                        <mask id="welcome-d" fill="#fff">
                                            <use xlinkHref="#welcome-a" />
                                        </mask>
                                        <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
                                        <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
                                    </g>
                                    <g transform="rotate(-51 91.324 -105.372)">
                                        <mask id="welcome-f" fill="#fff">
                                            <use xlinkHref="#welcome-e" />
                                        </mask>
                                        <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
                                        <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
                                    </g>
                                    <g transform="rotate(44 61.546 392.623)">
                                        <mask id="welcome-h" fill="#fff">
                                            <use xlinkHref="#welcome-g" />
                                        </mask>
                                        <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
                                        <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <div className="relative">
                            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Good afternoon, {user && user.name}. 👋</h1>
                            <p className='dark:text-gray-800'>Here is your Profile Details</p>
                        </div>

                    </div>
                </div>
                <section className="font-raleway ">

                    {profile !== null ? (
                        <div className='h-auto'>
                            <div className='mt-16'>
                                <DashboardActions />
                            </div>
                            <div className='flex justify-center flex-col'>

                                <div className='mt-16'>
                                    <Experience experience={profile.experience} />

                                </div>
                                <div className='mt-16'>
                                    <Education education={profile.education} />

                                </div>
                            </div>
                            <div className='py-20'>

                                <div className='flex justify-center items-center'>
                                    <div className="mt-16">
                                        <span class="box-border relative  inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-red-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500 ease focus:outline-none" onClick={() => deleteAccount()}>
                                            <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                            <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                            <span class="relative z-20 flex items-center text-sm" >
                                                <MdDeleteForever style={{ marginTop: "1px" }} />
                                                Delete My Account
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className=''>
                            <div className='mt-32 only:flex flex-col justify-center items-center'>
                                <span className='sm:text-lg dark:text-gray-300'>You have not yet setup a profile, please add some info</span>
                                <Link to="/create-profile" class="relative inline-block text-lg group mt-5">
                                    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 dark:text-gray-300 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-[#1E1E1E]"></span>
                                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#1EC28B] group-hover:-rotate-180 ease"></span>
                                        <span class="relative">Create Profile</span>
                                    </span>
                                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear  rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </Link>
                            </div>
                        </div>
                    )}
                </section>
            </div>
            
        </section>

    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    Dashboard
);
