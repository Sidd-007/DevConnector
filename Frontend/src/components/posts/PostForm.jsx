import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('');

    return (
        <div className='h-auto font-raleway'>
            <div className='mt-11'>
                <div class="mb-3 xl:w-96">
                    <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
                    >Say Something...</label>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            addPost({ text });
                            setText('');
                        }}
                    >
                        <textarea
                            class=" form-control block w-full px-3 py-1.5 text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            name='text'
                            placeholder="Create a Post"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            required
                        ></textarea>
                        <input type='submit' className='mt-4 inline-block px-6 py-2.5 bg-blue-600 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' value='Submit' />
                    </form>
                </div>
            </div>
            
        </div>
    );
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(
    null,
    { addPost }
)(PostForm);
