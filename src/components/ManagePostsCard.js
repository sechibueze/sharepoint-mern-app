import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deletePostById }  from '../actions/postActions';
const ManagePostsCard = ({ userPost, deletePostById }) => {
  const deleteUserPost = id => {
    if (window.confirm('This process cannot be undone, Are you sure ?')) {
      deletePostById(id)
    }
  };
  const {_id : postId ,  avatar, content } = userPost;
  return (
    <Fragment>
    
      <div className="manage-post-card mb-1">
        <div className="post-creator-image p-2">
          <img src={ avatar }
            alt={`alternatibe`}
            style={{ width: '90px', height: '90px' }}
          />
        </div>
        <div className="post-content">
          {/* <p className="post-title">Hello frompost title</p> */}
          <article> { content } </article>
          <div className="post-control">
            <span onClick={() => deleteUserPost(postId)} className="btn btn-danger">DELETE</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

ManagePostsCard.propTypes = {
  deletePostById: PropTypes.func.isRequired
};
 
export default connect(null, { deletePostById })(ManagePostsCard);