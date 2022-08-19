import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md'
import { deleteEducation } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Education = ({ education, deleteEducation }) => {
    const educations = education.map((edu) => (
        <>
            <div>
                <div class="flex flex-col items-center pb-10 px-6 py-2">
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{edu.school}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Qualification: {edu.degree}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}</span>
                    <div class="flex mt-4 space-x-3 md:mt-6">
                        <button
                            onClick={() => deleteEducation(edu._id)} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-600 leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"><MdDeleteForever />
                        </button>
                    </div>
                </div>

            </div>
        </>
    ));

    return (
        <Fragment>
            <div className='flex justify-center items-center flex-col'>
                <span className="text-3xl mt-16 ">Education</span>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end px-4 pt-4">
                        {educations}
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
