import axios from 'axios';
import { GET_ALL_POSTS, 
  SET_POST_BY_POST_ID,
  SET_POSTS_BY_USER_ID,
  NEW_POST_CREATED,
  POST_DELETED,
  LIKE_POST,
  UNLIKE_POST,
  ADD_COMMENT_TO_POST,
  REMOVE_POST_COMMENT
 } from './types';
import { getAuthHeaders } from './authActions';
import { setAlert } from './alertActions';

// Get ALl Posts
export const getAllPosts = () => dispatch => {
  const configHeaders = getAuthHeaders();
  axios.get('/api/posts', configHeaders)
    .then(({ data }) => {
      dispatch({
        type: GET_ALL_POSTS,
        payload: data.data
      });
    })
    .catch(err => {
      let errorText = err.response.statusText || err.toString();
      dispatch(setAlert(errorText));
    });
};

// Get all posts of a single user
export const getPostsByUserId = (id = 123) => dispatch => {
  const configHeaders = getAuthHeaders();
  axios.get(`/api/posts/users/${ id }`, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: SET_POSTS_BY_USER_ID,
        payload: data.data
      });
    })
    .catch(err => {
      let errorText = err.response.statusText || err.toString();
      dispatch(setAlert(errorText));
    });
};

// Get a single post by the post id
export const getPostByPostId = id => dispatch => {
  const configHeaders = getAuthHeaders();
  axios.get(`/api/posts/${id}`, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: SET_POST_BY_POST_ID,
        payload: data.data
      });
    })
    .catch(err => {
      const errorText = err.toString();
      dispatch(setAlert(errorText));
    });
};

// Create a post
export const createPost = postData => dispatch => {
  const configHeaders = getAuthHeaders();
  const body = JSON.stringify(postData);
  axios.post('/api/posts', body, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: NEW_POST_CREATED,
        payload: data.data
      });
    })
    .catch(err => {
      const errorText = err.toString();
      dispatch(setAlert(errorText));
    });
};

// route PUT 200 /api/posts/like/:id
// Like a Post
export const likePostByPostId = postId => dispatch => {
  const configHeaders = getAuthHeaders();
  
  axios.put(`/api/posts/like/${postId}`, {},  configHeaders)
    .then(({ data }) => {
      dispatch({
        type: LIKE_POST,
        payload: data
      });

      dispatch(setAlert(data.message, 'success'));
    })
    .catch(err => {
      
      const errorText = err.response.data.errors[0] || err.toString();
      dispatch(setAlert(errorText));
    });
};

// route PUT 200 /api/posts/unlike/:id
// UnLike a Post
export const unlikePostByPostId = postId => dispatch => {
  const configHeaders = getAuthHeaders();

  axios.put(`/api/posts/unlike/${postId}`,{} , configHeaders)
    .then(({ data }) => {
      dispatch({
        type: UNLIKE_POST,
        payload: data
      });

      dispatch(setAlert(data.message, 'success'));
    })
    .catch(err => {
      const errorText = err.response.data.errors[0];
      dispatch(setAlert(errorText));
    });
};

// @route POST 201 /api/posts/comments/:id
// Add comment to a post
export const addCommentToPost = (postId, comment) => dispatch => {
  const configHeaders = getAuthHeaders();
  const body = JSON.stringify({ comment });

  axios.post(`/api/posts/comments/${postId}`, body, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: ADD_COMMENT_TO_POST,
        payload: data.data
      });

      dispatch(setAlert(data.message, 'success'));
    })
    .catch(err => {
      const errorText = err.response.data.errors[0] || err.toString();
      dispatch(setAlert(errorText));
    });
};

// @route PUT 200 /api/posts:/post_id/comments/:comment_id
// Remove comment to a post
export const removePostComment = (postId, commentId ) => dispatch => {
  console.log('p c id', postId, commentId)
  const configHeaders = getAuthHeaders();
  const uri = `/api/posts/${postId}/comments/${commentId}`;
  axios.put(uri, {}, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: REMOVE_POST_COMMENT,
        payload: data.data
      });

      dispatch(setAlert(data.message, 'success'));
    })
    .catch(err => {
      const errorText = err.response.data.errors[0] || err.toString();
      dispatch(setAlert(errorText));
    });
};


// Delete a Post by Id
export const deletePostById = id => dispatch => {
  const configHeaders = getAuthHeaders();
  
  axios.delete(`/api/posts/${ id }`, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: POST_DELETED,
        payload: data
      });

      dispatch(setAlert(data.message, 'success'));
    })
    .catch(err => {
      const errorText = err.toString();
      dispatch(setAlert(errorText));
    });
};
