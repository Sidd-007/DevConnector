import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import { MdDeleteForever } from 'react-icons/md'
import formatDate from '../../utils/formatDate';

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map((exp) => (
        // <tr class="bg-gray-800" key={exp._id}>
        //     <td class="p-3">
        //         <div class="flex align-items-center">
        //             <div class="ml-3">
        //                 <div class="">{exp.company}</div>
        //             </div>
        //         </div>
        //     </td>
        //     <td class="p-3">
        //         {exp.title}
        //     </td>
        //     <td class="p-3 font-bold">
        //         {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
        //     </td>
        //     <td class="p-3">
        //         <button
        //             onClick={() => deleteExperience(exp._id)}
        //             className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        //         >
        //             <MdDeleteForever />
        //         </button>
        //     </td>
        // </tr>
        <div>
            <div class="flex flex-col items-center pb-10 px-6 py-2">
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{exp.company}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">As - {exp.title}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <button
                        onClick={() => deleteExperience(exp._id)} class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-600 leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"><MdDeleteForever />
                    </button>
                </div>
            </div>

        </div>
    ));

    return (
        <Fragment>
            <div className='flex justify-center items-center flex-col'>
            <span className="text-3xl mt-16 ">Experience At</span>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-end px-4 pt-4">
                    {experiences}
                </div>
            </div>
            </div>

        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
