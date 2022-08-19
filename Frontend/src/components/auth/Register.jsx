import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div class="font-raleway mb-20">
            {/* <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div class="relative sm:max-w-sm w-full">
                    <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label class="block mt-3 text-2xl text-gray-700 text-center font-semibold">
                            Sign Up
                        </label>
                        <form class="mt-10" onSubmit={onSubmit}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={onChange}
                                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                            </div>
                            <div class="mt-4">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                            </div>

                            <div class="mt-4">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                            </div>

                            <div class="mt-4">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    value={password2}
                                    onChange={onChange}
                                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                />
                            </div>

                            <div class="mt-7">
                                <input
                                    type="submit"
                                    class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                    value="Sign Up"
                                />
                            </div>

                            <div class="mt-7">
                                <div class="flex justify-center items-center">

                                    <label class="mr-2" >Already have an account? </label>

                                    <Link
                                        to="/login"
                                        class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                                    >
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
            <div class="mt-12 flex items-center justify-center ">
                <form onSubmit={onSubmit} class="w-full md:w-1/3  shadow-2xl dark:bg-[#1E1E1E] rounded-lg items-center">
                    <h2 class="text-4xl text-center text-gray-700 dark:text-gray-100 mb-4 mt-10 font-semibold">Create your Account!</h2>
                    <div class="px-12 pb-10">
                        <div class="w-full mb-2 mt-10">
                            <div class="flex justify-center">
                                <input type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={onChange} class="px-8 w-full border focus:ring-blue-500 focus:border-blue-500 rounded py-2 text-gray-700 focus:outline-none items-center" />
                            </div>
                        </div>
                        <div class="w-full mb-2 mt-10">
                            <div class="flex justify-center">
                                <input type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    onChange={onChange} class="px-8 w-full border focus:ring-blue-500 focus:border-blue-500 rounded py-2 text-gray-700 focus:outline-none items-center" />
                            </div>
                        </div>
                        <div class="w-full mb-2 mt-10">
                            <div class="flex justify-center">
                                <input type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={onChange}
                                    class="px-8 w-full border rounded py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                            </div>
                        </div>
                        <div class="w-full mb-2 mt-10">
                            <div class="flex justify-center">
                                <input type="password"
                                    placeholder="Confirm Password"
                                    name="password2"
                                    value={password2}
                                    onChange={onChange}
                                    class="px-8 w-full border rounded py-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <input
                                type="submit" class="w-1/2 mt-6 py-2 rounded bg-purple-500 text-gray-100 focus:outline-none cursor-pointer" value="Sign Up" />
                        </div>
                        <div class="flex justify-center mt-10">
                            <label class="mr-2 dark:text-gray-200" >Already have an account? </label>
                            <Link
                                to="/register"
                                class=" text-[#1EC28B] font-semibold transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                            >
                                Sign In
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    );
};


Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
