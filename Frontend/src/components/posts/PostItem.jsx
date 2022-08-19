import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { BiDislike, BiLike } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
    addLike,
    removeLike,
    deletePost,
    auth,
    post: { _id, text, name, avatar, user, likes, comments, date },
    showActions
}) => (
    <>
        <div class="antialiased mx-auto max-w-screen-sm mt-10">
            <div class="space-y-4">
                <div class="flex">
                    <div class="flex-shrink-0 mr-3">
                        <Link to={`/profile/${user}`}>
                            <img class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={avatar} alt="" />
                        </Link>
                    </div>
                    <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <Link to={`/profile/${user}`}>
                            <strong>{name}</strong>
                        </Link>
                        <span class="text-xs text-gray-400 ml-2">{formatDate(date)}</span>
                        <p class="text-sm">{text}</p>
                        <div class="mt-4 flex items-center">
                            <div class="flex space-x-4 ml-2">
                                {showActions && (
                                    <Fragment>
                                        <button
                                            onClick={() => addLike(_id)}
                                            type="button"
                                            className="flex"
                                        >
                                            <BiLike className='mt-1 text-lg' />
                                            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                                        </button>
                                        <button
                                            onClick={() => removeLike(_id)}
                                            type="button"
                                            className="flex"
                                        >
                                            <BiDislike className='mt-1  text-lg' />
                                        </button>
                                        <Link to={`/posts/${_id}`} class="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                            Discussion{' '}
                                            {comments.length > 0 && (
                                                <span className="comment-count">{comments.length}</span>
                                            )}
                                        </Link>
                                        {!auth.loading && user === auth.user._id && (
                                            <button
                                                onClick={() => deletePost(_id)}
                                                type="button"
                                                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                <MdDeleteForever />
                                            </button>
                                        )}
                                    </Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
    PostItem
);
