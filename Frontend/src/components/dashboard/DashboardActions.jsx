import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className='flex justify-center sm:ml-32 ml-4'>
            <Link to='/edit-profile' class="sm:mr-36 mr-5 relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black dark:border-white group-hover:bg-purple-600"></span>
                <span class="relative text-black group-hover:text-white">Edit Profile</span>
            </Link>
            <Link to='/add-experience'class="sm:mr-36 mr-5  relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black dark:border-white group-hover:bg-purple-600"></span>
                <span class="relative text-black group-hover:text-white">Add Experience</span>
            </Link>
            <Link to='/add-education'  class="sm:mr-36 mr-5  relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-purple-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black dark:border-white group-hover:bg-purple-600"></span>
                <span class="relative text-black group-hover:text-white">Add Education</span>
            </Link>
        </div>
    );
};

export default DashboardActions;
 