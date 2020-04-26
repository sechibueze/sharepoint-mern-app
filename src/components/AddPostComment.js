import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCommentToPost } from '../actions/postActions';
const AddPostComment = ({postId, addCommentToPost }) => {
  const [comment, setComment] = useState('');
  const handleChange = ({ target }) => setComment(target.value);
  const handleSubmit = e => {
    e.preventDefault();
    
    addCommentToPost(postId, comment);
  }
  return (
    <Fragment>
      <div className="add-comment">
        
        <form className="form" onSubmit={ handleSubmit }>
          <div className="form-group">
            <label> Comment</label>
            <textarea className="form-control" rows="7" cols="20"
              value={ comment }
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input className="btn btn-dark" type="submit" value="Comment" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}
 AddPostComment.propTypes = {
   addCommentToPost: PropTypes.func.isRequired
 };
export default connect(null, { addCommentToPost})(AddPostComment);