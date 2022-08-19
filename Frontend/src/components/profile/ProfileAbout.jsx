import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user: { name }
    }
}) => (
    <div className=''>
        {bio && (
            <Fragment>
                <h2 className=''>{name.trim().split(' ')[0]}'s Bio</h2>
                <p>{bio}</p>
            </Fragment>
        )}
        <h2 className=''>Skill Set</h2>
        <div className=''>
            {skills.map((skill, index) => (
                <div key={index} className=''>
                    {skill}
                </div>
            ))}
        </div>
    </div>
);

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileAbout;
