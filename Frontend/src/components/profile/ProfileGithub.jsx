import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos, username]);

    return (
        <div className='mt-6 font-raleway '>
            <h2 className="flex flex-col justify-center items-center text-md whitespace-nowrap text-3xl font-semibold">Github Repos</h2>
            <div className="flex flex-row space-x-5 justify-center items-center  w-full mt-10">

                {repos.map(repo => (
                    <div key={repo.id}>
                        <div class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
                            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" class="relative">{repo.name}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ProfileGithub.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
