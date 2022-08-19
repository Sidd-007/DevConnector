import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <section className='font-raleway'>
            <div className="mx-auto mb-12 mt-16 overflow-hidden py-0 px-8 flex flex-col justify-center items-center">
                <span className="sm:text-[40px] font-semibold text-3xl">Welcome to the community</span>
                <PostForm />
                <div className="">
                    {posts.map((post) => (
                        <PostItem key={post._id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
