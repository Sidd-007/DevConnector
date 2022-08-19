import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile }, auth }) => {
    const { id } = useParams();
    useEffect(() => {
        getProfileById(id);
    }, [getProfileById, id]);

    return (
        <section className="mx-auto mb-12 mt-24 overflow-hidden py-0 px-8">
            {profile === null ? (
                <Spinner />
            ) : (
                <Fragment>
                    <div className="">
                        <ProfileTop profile={profile} />

                        <div className='flex flex-row font-raleway justify-between'>
                            <div class="card w-96 mx-auto border border-gray-100 transition-shadow shadow-xl hover:shadow-xl mt-16  mb-10">
                                <div class="flex items-center p-4">
                                    <div class="relative flex flex-col items-center w-full">
                                        <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                                            <span class="text-md whitespace-nowrap text-3xl font-semibold">Experience</span>
                                            <p class="text-sm text-gray-600">
                                                {profile.experience.length > 0 ? (
                                                    <Fragment>
                                                        {profile.experience.map((experience) => (
                                                            <ProfileExperience
                                                                key={experience._id}
                                                                experience={experience}
                                                            />
                                                        ))}
                                                    </Fragment>
                                                ) : (
                                                    <h4>No experience credentials</h4>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card w-96 mx-auto border border-gray-100  transition-shadow shadow-xl hover:shadow-xl mt-16  mb-10">
                                <div class="flex items-center p-4">
                                    <div class="relative flex flex-col items-center w-full">
                                        <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                                            <span class="text-md whitespace-nowrap text-3xl font-semibold">Education</span>
                                            <p class="text-sm text-gray-600">
                                                {profile.education.length > 0 ? (
                                                    <Fragment>
                                                        {profile.education.map((education) => (
                                                            <ProfileEducation
                                                                key={education._id}
                                                                education={education}
                                                            />
                                                        ))}
                                                    </Fragment>
                                                ) : (
                                                    <h4>No education credentials</h4>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {profile.githubusername && (
                            <ProfileGithub username={profile.githubusername} />
                        )}
                    </div>
                </Fragment>
            )}
        </section>
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
