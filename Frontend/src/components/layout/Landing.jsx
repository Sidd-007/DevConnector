import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }


    return (
        <section className='dark:text-[#ffffff] h-auto'>
            <header>

                <div className="dark:bg-[#171717]  pb-12 overflow-y-hidden font-raleway dark:text-[#ffffff] text-[#3F4581] ">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24 mt-10">
                        <div className="w-11/12 sm:w-2/3 lg:flex flex flex-col justify-center items-center   mb-5 sm:mb-10">
                            <span className='text-[50px] sm:text-8xl md:text-8xl lg:text-8xl xl:text-[115px] text-transparent bg-clip-text bg-gradient-to-r from-[#AD6DF9] to-[#E28D88] '>
                                <span className='font-extrabold'>Dev</span><span className=''>Connector</span>
                            </span>
                            <span class="sm:text-[15px] text-[12px] ml-3 sm:ml-5 mt-2 sm:mt-5">Create a developer profile/portfolio, share posts and get help from other developers</span>
                        </div>
                        <div className="flex justify-center items-center mt-4">
                            <Link to="/profiles" class="box-border relative  inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                                <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                <span class="relative  flex items-center text-sm space-x-4">
                                    Explore
                                    <svg class=" ml-2 w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            
        </section>
    );
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
