import axios from 'axios';
import { SET_PROFILE, SET_ALL_PROFILES, SET_PROFILE_BY_USER_ID } from './types';
import { setAlert } from './alertActions';
import { getAuthHeaders } from './authActions';
// get the loggedin user profile
export const getCurrentProfile = () => dispatch => {
  const configHeaders = getAuthHeaders();
  axios.get('/api/profiles/me', configHeaders)
    .then(({ data }) => {
      dispatch({
        type: SET_PROFILE,
        payload: data.data
      });
    })
    .catch(err => {
      const errorText = err.response.data.errors[0];
      dispatch(setAlert(errorText));
    });
};

// get profile by the id of user
// /api/profiles/users/:user_id
export const getProfileByUserId = id => dispatch => {
  // const configHeaders = getAuthHeaders();

  axios.get(`/api/profiles/users/${id}`)
    .then(({ data }) => {
      dispatch({
        type: SET_PROFILE_BY_USER_ID,
        payload: data.data
      });
    })
    .catch(err => {
      const errorText = err.toString();
      dispatch(setAlert(errorText));
    });
};
// Create or Update profile
export const createProfile = (profileData, history, edit = false) => dispatch => {
  // make request body
  const body = JSON.stringify(profileData);
  // set up Headers
  const configHeaders = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios.post('/api/profiles', body, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: SET_PROFILE,
        payload: data.data
      });

      
      const successText = edit === true ? 'Profile Updated' : 'Profile created';
      dispatch(setAlert(successText));

      history.push('/dashboard');
    })
    .catch(err => {
      console.log('status text', err.response.statusText)
      const errorText = err.response.statusText;
      dispatch(setAlert(errorText));
    });

};

// Get ALL Profiles
export const getAllProfiles = () => dispatch => {
  // const configHeaders = getAuthHeaders();
  axios.get('/api/profiles')
    .then(({ data }) => {
      dispatch({
        type: SET_ALL_PROFILES,
        payload: data.data
      });


      const successText = 'All Profiles';
      dispatch(setAlert(successText));
    })
    .catch(err => {
      
      const errorText = err.response.statusText;
      dispatch(setAlert(errorText));
    });

};

// Add Education 
export const addEducation = (educationData, history) => dispatch => {
  const configHeaders = getAuthHeaders();
  const body = JSON.stringify(educationData);
  axios.put('/api/profiles/education', body, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: SET_PROFILE,
        payload: data.data
      });

      const successText = 'Education added';
      dispatch(setAlert(successText));

      history.push('/dashboard');
    })
    .catch(err => {
      const errorText = err.response.statusText;
      dispatch(setAlert(errorText));
    });
};

// Add Experience 
export const addExperience = (experienceData, history) => dispatch => {
  const configHeaders = getAuthHeaders();
  const body = JSON.stringify(experienceData);
  axios.put('/api/profiles/experience', body, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: SET_PROFILE,
        payload: data.data
      });

      const successText = 'Experience added';
      dispatch(setAlert(successText));
      history.push('/dashboard');
    })
    .catch(err => {
      const errorText = err.response.statusText;
      dispatch(setAlert(errorText));
    });
};


// Delete Education @ /api/profiles/education/:edu_id
export const deleteEducation = id => dispatch => {
  const configHeaders = getAuthHeaders();

  axios.delete(`/api/profiles/education/${id}`, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: SET_PROFILE,
        payload: data.data
      });

      const successText = 'Education deleted';
      dispatch(setAlert(successText));
      // history.push('/dashboard');
    })
    .catch(err => {
      const errorText = err.response.statusText;
      dispatch(setAlert(errorText));
    });
};


// Delete Experience @ /api/profiles/experience/:exp_id
export const deleteExperience = id => dispatch => {
  const configHeaders = getAuthHeaders();

  axios.delete(`/api/profiles/experience/${id}`, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: SET_PROFILE,
        payload: data.data
      });

      const successText = 'Experience deleted';
      dispatch(setAlert(successText));
      // history.push('/dashboard');
    })
    .catch(err => {
      const errorText = err.response.statusText;
      dispatch(setAlert(errorText));
    });
};


