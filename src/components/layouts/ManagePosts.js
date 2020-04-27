import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { getPostsByUserId } from '../../actions/postActions';
import CreatePost from '../CreatePost';
import ManagePostsCard from '../ManagePostsCard';
import Spinner from '../Spinner';
const ManagePosts = ({ postsByUser, getPostsByUserId, newPost, postDeleted }) => {
  // console.log('post by user', props.postsByUser)
  // const { postsByUser, getPostsByUserId } = props;
  useEffect(() => {
    getPostsByUserId();
  }, [getPostsByUserId ,newPost, postDeleted]);
 
  return (
    postsByUser === null ?
     (<Spinner />) : 
     (
        <Fragment>
        
          <Alert />
          <CreatePost />
          <div className="line"></div> 
          <div className="post-wrapper">
            {postsByUser.length < 1 ? 
            (<h1 className='text text-primary'>You have not added any post yet</h1>) : 
            (postsByUser.map(post => <ManagePostsCard userPost={ post } />))}
          </div>
        </Fragment>
     )
    
  );
}
ManagePosts.propTypes = {
  getPostsByUserId: PropTypes.func.isRequired,
  postsByUser: PropTypes.array,
  newPost: PropTypes.object,
  postDeleted: PropTypes.object
};
 const mapaStateToProps = state => ({
  postsByUser: state.post.postsByUserId,
  newPost: state.post.newPost,
  postDeleted: state.post.postDeleted
 });
export default connect(mapaStateToProps, { getPostsByUserId })(ManagePosts);