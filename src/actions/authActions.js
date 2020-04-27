import axios from 'axios';
import { SET_CURRENT_USER, AUTH_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from './types';
import { setAlert } from './alertActions';

// setup config header
export const getAuthHeaders = () =>{
  // get token from localstorage
  const token = localStorage.getItem('token');
  // prepare headers
  let configHeader = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Add token to headers
  if (token) {
    configHeader.headers["x-auth-token"] = token;
  }

  return configHeader;
}
// load current user
export const loadUser = () => (dispatch, getState) => {
  
  const configHeader = getAuthHeaders();
  // Make request
  axios.get('/api/auth', configHeader)
    .then(({ data }) => {
      
      dispatch({
        type: SET_CURRENT_USER,
        payload: data.data
      });
    })
    .catch(err => {
      // Get errors from response object
      if (err.response && err.response.data && err.response.data.errors) {
        err.response.data.errors.map(errorText => dispatch(setAlert(errorText)))
      } else if (err.message) {
        dispatch(setAlert(err.message));
      } else {
        dispatch(setAlert(err.toString()));
      }
      
      dispatch({ type: AUTH_ERROR });
    });
};


// User Register
export const registerUser = userData => dispatch => {
  axios.post('/api/signup', userData)
    .then(({ data }) => {
      const { token } = data;
      // Set token in localStorage
      localStorage.setItem('token', token);
      
      // load the user
      dispatch(loadUser());

      dispatch({
        type: REGISTER_SUCCESS,
        payload: token
      }); 
    })
    .catch(err => {
      if (err.response && err.response.data && err.response.data.errors) {
        err.response.data.errors.map(errorText => dispatch(setAlert(errorText)))
      } else if (err.message) {
        dispatch(setAlert(err.message));
      } else {
        dispatch(setAlert(err.toString()));
      }

    });
};
// User can login
export const loginUser = (email, password) => dispatch => {
  // Package request body
  const body = JSON.stringify({ email, password });
  // prepare headers
  let configHeader = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // make request
  axios.post('/api/login', body, configHeader)
    .then(({ data }) => {
      const { token } = data;
      // Set token in localStorage
      localStorage.setItem('token', token); 
      // load the user
      dispatch(loadUser());
         
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token
      }); 

      
    })
    .catch(err => {
      if (err.response && err.response.data && err.response.data.errors) {
        err.response.data.errors.map(errorText => dispatch(setAlert(errorText)))
      } else if (err.message) {
        dispatch(setAlert(err.message));
      } else {
        dispatch(setAlert(err.toString()));
      }
    });
};


export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
}