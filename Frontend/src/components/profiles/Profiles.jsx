import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <div className='font-raleway '>
            <div className="grid place-items-center mt-16 ">
                {loading ? (
                    <Spinner />
                ) : (
                    <Fragment>
                        {/* <span className="leading-tight text-6xl font-bold text-blue-600">Developers</span> */}

                        <div className="mt-10">
                            {profiles.length > 0 ? (
                                profiles.map((profile) => (
                                    <ProfileItem key={profile._id} profile={profile} />
                                ))
                            ) : (
                                <main>
                                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                                        <div className="max-w-2xl m-auto mt-16">

                                            <div className="text-center px-4">
                                                <div className="inline-flex mb-8">
                                                    
                                                </div>
                                                <div className="mb-6 dark:text-gray-100 sm:text-2xl font-semibold">Sorry We Currently Didn't Have Any Developers</div>
                                                
                                            </div>

                                        </div>

                                    </div>
                                </main>
                            )}
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
