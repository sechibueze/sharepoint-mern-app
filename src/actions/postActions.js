import axios from 'axios';
import { GET_ALL_POSTS } from './types';
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
      const errorText = err.toString();
      dispatch(setAlert(errorText));
    });
};