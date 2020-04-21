import axios from 'axios';
import { SET_CURRENT_USER, AUTH_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS } from './types';
import { setAlert } from './alertActions';

// load current user
export const loadUser = () => (dispatch, getState) => {
  // get token from state
  const { token } = getState().auth;
  console.log('loaduser tok', token)
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
      // errors is an array
      // console.log('auth err::', )
      console.log('type err', typeof err)
      console.log('type err', err)
      let errorText = err.response.data;

      if (typeof err.response.data === 'object') {
        errorText = err.response.data.errors[0];
      }

      dispatch(setAlert(errorText));
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
   
      dispatch({
        type: REGISTER_SUCCESS,
        payload: token
      });

      // load the user
      dispatch(loadUser());
    })
    .catch(err => {
      
      let errorText = err.response.data;

      if (typeof err.response.data === 'object') {
        errorText = err.response.data.errors[0];
      }

      dispatch(setAlert(errorText));
    });
};
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
      
      let errorText = err.response.data;

      if (typeof err.response.data === 'object') {
        errorText = err.response.data.errors[0];
      }

      dispatch(setAlert(errorText));
    });
};


export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
}