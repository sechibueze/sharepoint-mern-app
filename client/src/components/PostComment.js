import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { removePostComment } from '../actions/postActions';
const PostComment = ({ renderComment, postId, removePostComment, user }) => {
  const {_id: commentId, user: {name, _id: commentOwnerId }, avatar, comment } = renderComment;
  const deleteThisComment = () => {
    if (window.confirm('This cannot be undone, Are you sure ?')) {
      removePostComment(postId, commentId)
    }
  }
  return (
    <Fragment>
        {/* { `post id=${postId}`} */}
        <div className="comment">
          <img className="comment-avartar" src={ avatar } 
          style={{ width: '90px', height: '90px', borderRadius: '50%', border: '1px solid'}}
          alt={`${name}-commenter`}
           />
          <article className="comment-content">
            <p> <strong> { name } </strong></p>
                { comment }
          {user.id === commentOwnerId && (
          <p className='m-1'> <span
            onClick={e => deleteThisComment()}
            className='fa fa-close fa-2x'
          /></p>
          )}
          </article>
          
        </div>
 
    </Fragment>
  );
}
 PostComment.propTypes = {
   removePostComment: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired
 };
 const mapStateToProps = state => ({
   user: state.auth.user
 });
export default connect(mapStateToProps, { removePostComment })(PostComment);