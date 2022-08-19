import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../actions/post';
import { MdDeleteForever } from 'react-icons/md'

const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth,
    deleteComment
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
                                {!auth.loading && user === auth.user._id && (
                                    <button
                                        onClick={() => deleteComment(postId, _id)}
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-600 text-white  text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        <MdDeleteForever />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
