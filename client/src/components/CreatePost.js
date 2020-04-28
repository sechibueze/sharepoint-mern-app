import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';
const CreatePost = ({ createPost }) => {

  const [postData, setPostData ] = useState({ content: ''});

  const handleChange = ({ target }) => {
    setPostData({
      ...postData,
      [target.name]: target.value
    });
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    createPost(postData)
  }
  const { content } = postData;
  return (
    <Fragment>
      <div className="add-post">
        <p className="text text-primary">Say something today</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <input className="form-control" name="title" /> */}
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="7" cols="20"
            placeholder='Start typing...or paste your content'
            name='content'
            value={ content }
            required
            onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-group">
            <input className="btn btn-dark" type="submit" value="Post" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

 CreatePost.propTypes = {
   createPost: PropTypes.func.isRequired
 };
export default connect(null, { createPost })(CreatePost);