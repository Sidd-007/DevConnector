import React, { Fragment, useState, useEffect } from 'react';
import {useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'


const initialState = {
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
};

const ProfileForm = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile
}) => {
    const [formData, setFormData] = useState(initialState);

    const creatingProfile = useMatch('/create-profile');

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        if (!profile) getCurrentProfile();


        if (!loading && profile) {
            const profileData = { ...initialState };
            for (const key in profile) {
                if (key in profileData) profileData[key] = profile[key];
            }
            for (const key in profile.social) {
                if (key in profileData) profileData[key] = profile.social[key];
            }

            if (Array.isArray(profileData.skills))
                profileData.skills = profileData.skills.join(', ');

            setFormData(profileData);
        }
    }, [loading, getCurrentProfile, profile]);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, navigate, profile ? true : false);
    };

    return (
        <div className='h-auto font-raleway'>
            {/* <section className="mx-auto mb-12 mt-10 overflow-hidden py-0 px-8 font-din"> */}
            <div className='flex flex-col justify-center items-center'>
                <span className="sm:text-4xl text-4xl mt-8 dark:text-gray-300">
                    {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
                </span>

                <form class="w-full md:w-1/3 mt-16 shadow-2xl dark:bg-[#1E1E1E] rounded-lg mb-10 dark:text-gray-300" onSubmit={onSubmit}>
                    <div className='px-12 pb-10'>



                        <div class="flex flex-wrap -mx-3 mb-6 mt-12">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  focus:ring-blue-500 focus:border-blue-500"
                                    id="grid-first-name"
                                    type="text"
                                    placeholder="Company"
                                    name="company"
                                    value={company}
                                    onChange={onChange}
                                />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="Website"
                                    name="website"
                                    value={website}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500" id="grid-state' name="status" value={status} onChange={onChange}>
                                    <option>* Select Professional Status</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Junior Developer">Junior Developer</option>
                                    <option value="Senior Developer">Senior Developer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Student or Learning">Student or Learning</option>
                                    <option value="Instructor">Instructor or Teacher</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500" id="grid-city" type="text" placeholder="Location"
                                    name="location"
                                    value={location}
                                    onChange={onChange} />
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500" id="grid-city" type="text" placeholder="* Skills"
                                    name="skills"
                                    value={skills}
                                    onChange={onChange} />

                            </div>
                        </div>
                        <div className='flex flex-wrap -mx-3 mt-6'>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500" id="grid-zip" type="text" placeholder="A short bio of yourself"
                                    name="bio"
                                    value={bio}
                                    onChange={onChange}
                                />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <input
                                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500"
                                    id="grid-last-name"
                                    type="text"
                                    placeholder="Github Username"
                                    name="githubusername"
                                    value={githubusername}
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                                type="button"
                                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            >
                                Add Social Network Links
                            </button>
                            <span className='ml-3'>(Optional)</span>
                        </div>

                        {displaySocialInputs && (
                            <Fragment>
                                <div className='mt-2 px-2 py-2'>
                                    <div className="flex mb-3 xl:w-96">
                                        <FiTwitter className='text-2xl fill-blue-700 mt-2' />
                                        <input
                                            type="text"
                                            placeholder="Twitter URL"
                                            name="twitter"
                                            value={twitter}
                                            onChange={onChange}
                                            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ml-3"
                                        />
                                    </div>

                                    <div className="flex">
                                        <FiFacebook className='text-2xl bg-indigo-600 mt-2' />
                                        <input
                                            type="text"
                                            placeholder="Facebook URL"
                                            name="facebook"
                                            value={facebook}
                                            onChange={onChange}
                                            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ml-3"
                                        />
                                    </div>

                                    <div className="flex mt-3">
                                        <FiYoutube className='text-2xl fill-red-700 mt-2' />
                                        <input
                                            type="text"
                                            placeholder="YouTube URL"
                                            name="youtube"
                                            value={youtube}
                                            onChange={onChange}
                                            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ml-3"
                                        />
                                    </div>

                                    <div className="flex mt-3">
                                        <FiLinkedin className='text-2xl fill-blue-500 mt-2' />
                                        <input
                                            type="text"
                                            placeholder="Linkedin URL"
                                            name="linkedin"
                                            value={linkedin}
                                            onChange={onChange}
                                            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ml-3"
                                        />
                                    </div>

                                    <div className="flex mt-3">
                                        <FiInstagram className='text-2xl fill-pink-500 mt-2' />
                                        <input
                                            type="text"
                                            placeholder="Instagram URL"
                                            name="instagram"
                                            value={instagram}
                                            onChange={onChange}
                                            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ml-3"
                                        />
                                    </div>
                                </div>
                            </Fragment>
                        )}

                        <input type="submit" className='flex px-6 py-2.5 bg-blue-600 text-white text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-10' />
                    </div>
                </form>
            </div>
            {/* </section> */}
        </div>
    );
};

ProfileForm.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    ProfileForm
);
