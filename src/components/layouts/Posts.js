import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPosts }  from '../../actions/postActions';
import PostCard from '../PostCard';
import Spinner from '../Spinner';
const Posts = ({ getAllPosts, posts }) => {
  
  useEffect(() => getAllPosts(), []);

  return (
    posts === null ? 
      (<Spinner />) :
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