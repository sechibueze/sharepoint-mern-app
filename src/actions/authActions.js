import axios from 'axios';
import { SET_CURRENT_USER, AUTH_ERROR, LOGIN_SUCCESS } from './types';
import { setAlert } from './alertActions';

// User can login
export const loginUser = (email, password) => dispatch => {
  // Package request body
  const body = { email, password};

  // make request
  axios.post('/api/login', body)
    .then(({ data }) => {
      const { token } = data;
      // Set token in localStorage
      localStorage.setItem('token', token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token
      });
    })
    .catch(err => {
      const errorText = err.response.data.errors[0];
      dispatch(setAlert(errorText));
    });
};

export const loadUser = () => (dispatch, getState) => {
  // get token from state
  const {token} = getState().auth;

  // prepare headers
  let configHeader = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Add token to headers
  if(token){
    configHeader.headers["x-auth-token"] = token;
  }

  // Make request
  axios.get('/api/', configHeader)
    .then(({ data }) => {

    })
    .catch(err => {
      const errorText = err.response.data.errors[0];
      dispatch(setAlert(errorText, 4000));
    });


};