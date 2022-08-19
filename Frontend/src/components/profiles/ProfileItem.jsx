import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        skills
    }
}) => {
    return (
        <>
            <div className='flex flex-row font-din'>
                <div class="card w-96 mx-auto border border-gray-100  transition-shadow shadow-xl hover:shadow-xl mt-16  mb-10">
                    <div class="flex items-center p-4">
                        <div class="relative flex flex-col items-center w-full">
                            <div class="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-purple-600 min-w-max -top-16 flex bg-purple-200  row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                                <img class="h-24 w-24 md rounded-full relative" src={avatar} alt='' />
                                <div class="absolute"></div>
                            </div>
                            <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                                <span class="text-md whitespace-nowrap text-3xl font-semibold">{name}</span>
                                <p class="text-sm text-gray-600">
                                    {status} {company && <span> at {company}</span>}
                                </p>
                                <div class="py-2 flex space-x-2">
                                    <Link to={`/profile/${_id}`} class="mt-5 relative inline-block px-4 py-2 font-medium group">
                                        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                        <span class="absolute inset-0 w-full h-full bg-white border-2 border-black dark:border-white group-hover:bg-purple-600"></span>
                                        <span class="relative text-black group-hover:text-white">View Profile</span>
                                    </Link>
                                </div>

                                <div class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">

                                    <span class="text-center px-2"><span class="font-bold text-gray-700">{skills.slice(0, 4).map((skill, index) => (
                                        <span key={index} className=''>{skill}
                                        </span>
                                    ))}</span></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;