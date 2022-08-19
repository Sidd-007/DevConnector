import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
    profile: {
        status,
        company,
        location,
        social,
        bio,
        skills,
        user: { name, avatar }
    }
}) => {
    return (
        <>
            <div className='flex flex-row font-raleway'>
                <div class="card w-96 mx-auto border border-gray-100  transition-shadow shadow-xl hover:shadow-xl mt-16  mb-10">
                    <div class="flex items-center p-4">
                        <div class="relative flex flex-col items-center w-full">
                            <div class="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-purple-600 min-w-max -top-16 flex  row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                                <img class="h-24 w-24 md rounded-full relative" src={avatar} alt='' />
                                <div class="absolute"></div>
                            </div>
                            <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                                <span class="text-md whitespace-nowrap text-3xl font-semibold">{name}</span>
                                <p class="text-sm text-gray-600">
                                    <p>Bio: {bio}</p>
                                </p>
                                <p class="text-sm text-gray-600">
                                    <p>{location ? <span>{location}</span> : null}</p>
                                </p>
                                <p class="text-sm text-gray-600">
                                    {status} {company && <span> at {company}</span>}
                                </p>
                                <div class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                                    <span class="text-center px-2"><span class="font-bold text-gray-700">{skills.slice(0, 4).map((skill, index) => (
                                        <span key={index} className=''>{skill}
                                        </span>
                                    ))}</span></span>

                                </div>
                                <div class="py-4 flex space-x-1 justify-between">
                                    <div>
                                        {social
                                            ? Object.entries(social)
                                                .filter(([_, value]) => value)
                                                .map(([key, value]) => (
                                                    <a
                                                        key={key}
                                                        href={value}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='text-gray-900 ml-3'
                                                    >
                                                        <i className={`fab fa-${key} fa-2x`}></i>
                                                    </a>
                                                ))
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileTop;
