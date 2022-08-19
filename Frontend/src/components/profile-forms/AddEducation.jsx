import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const { school, degree, fieldofstudy, from, to, description, current } =
        formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <>
            <div className='h-auto font-raleway dark:text-gray-300'>
                <div className='flex flex-col justify-center items-center'>

                    <span className="text-3xl mt-8">
                        Add Your Education
                    </span>
                    <form
                        className="w-full md:w-1/3 mt-16 shadow-2xl dark:bg-[#1E1E1E] mb-10"
                        onSubmit={(e) => {
                            e.preventDefault();
                            addEducation(formData, navigate);
                        }}
                    >
                        <div className='px-12 pb-10'>

                            <div class="flex flex-wrap -mx-3 mb-6 mt-12">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-800"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="* School or Bootcamp"
                                        name="school"
                                        value={school}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3">
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-800"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="* Degree or Certificate"
                                        name="degree"
                                        value={degree}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <input
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-800"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Field of Study"
                                        name="fieldofstudy"
                                        value={fieldofstudy}
                                        onChange={onChange}
                                    />
                                </div>
                                <div class="w-full md:w-1/2 px-3 ">
                                    <input
                                        type="checkbox"
                                        class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer dark:placeholder-gray-800"
                                        name="current"
                                        checked={current}
                                        value={current}
                                        onChange={() => {
                                            setFormData({ ...formData, current: !current });
                                        }}
                                    />{' '}
                                    Current School
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">

                                <div className="w-full md:w-1/2 px-3">
                                    <label class="text-gray-700 dark:text-gray-300">From Date</label>
                                    <input
                                        type="date"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:placeholder-gray-800"
                                        placeholder="From Date"
                                        value={from}
                                        onChange={onChange}
                                        name="from"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label class="text-gray-700 dark:text-gray-300">To Date</label>
                                    <input
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none dark:placeholder-gray-800"
                                        placeholder="To Date" type="date"
                                        name="to"
                                        value={to}
                                        onChange={onChange}
                                        disabled={current}
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 8 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="description"
                                    cols="30"
                                    rows="5"
                                    placeholder="Program Description"
                                    value={description}
                                    onChange={onChange}
                                />
                            </div>
                            <input type="submit" className='flex px-6 py-2.5 bg-blue-600 text-white text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-10 ' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
