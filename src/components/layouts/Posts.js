import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPosts }  from '../../actions/postActions';
import PostCard from '../PostCard';
const Posts = ({ getAllPosts, posts }) => {
  const allPosts = [1, 2];
  useEffect(() => getAllPosts(), []);

  return (
    posts === null ? 
      (<Fragment> <h1> Loading...</h1></Fragment>) :
      (
        <div className="post-wrapper">
          {posts.map((post, index) => <PostCard post={post} key={index} />)}
        </div>
      )
   
  );
}
Posts.propTypes = {
  posts: PropTypes.array,
  getAllPosts: PropTypes.func.isRequired
};
 const mapStateToProps = state => ({
   posts: state.post.posts
 });
export default connect(mapStateToProps, { getAllPosts })(Posts);