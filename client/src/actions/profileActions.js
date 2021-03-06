import axios from 'axios';
import { SET_PROFILE, 
  SET_ALL_PROFILES, 
  SET_PROFILE_BY_USER_ID,
  CREATE_PROFILE,
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  DELETE_EDUCATION,
  DELETE_EXPERIENCE
} from './types';
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
      if (err.response && err.response.data && err.response.data.errors) {
        err.response.data.errors.map(errorText => dispatch(setAlert(errorText)))
      } else if (err.message) {
        dispatch(setAlert(err.message));
      } else {
        dispatch(setAlert(err.toString()));
      }

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
      if (err.response && err.response.data && err.response.data.errors) {
        err.response.data.errors.map(errorText => dispatch(setAlert(errorText)))
      } else if (err.message) {
        dispatch(setAlert(err.message));
      } else {
        dispatch(setAlert(err.toString()));
      }

    });
};
// Create or Update profile
export const createProfile = (profileData, history, edit = false) => dispatch => {
  // make request body
  const body = JSON.stringify(profileData);
  // set up Headers
  const configHeaders = getAuthHeaders();

  axios.post('/api/profiles', body, configHeaders)
    .then(({ data }) => {
      dispatch({
        type: CREATE_PROFILE,
        payload: data.data
      });

      
      const successText = edit === true ? 'Profile Updated' : 'Profile created';
      dispatch(setAlert(successText, 'success'));

      history.push('/dashboard');
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
      dispatch(setAlert(successText, 'success'));
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

// Add Education 
export const addEducation = (educationData, history) => dispatch => {
  const configHeaders = getAuthHeaders();
  const body = JSON.stringify(educationData);
  axios.put('/api/profiles/education', body, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: ADD_EDUCATION,
        payload: data.data
      });

      const successText = 'Education added';
      dispatch(setAlert(successText, 'success'));

      history.push('/dashboard');
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

// Add Experience 
export const addExperience = (experienceData, history) => dispatch => {
  const configHeaders = getAuthHeaders();
  const body = JSON.stringify(experienceData);
  axios.put('/api/profiles/experience', body, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: ADD_EXPERIENCE,
        payload: data.data
      });

      const successText = 'Experience added';
      dispatch(setAlert(successText, 'success'));
      history.push('/dashboard');
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


// Delete Education @ /api/profiles/education/:edu_id
export const deleteEducation = id => dispatch => {
  const configHeaders = getAuthHeaders();

  axios.delete(`/api/profiles/education/${id}`, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: DELETE_EDUCATION,
        payload: data.data
      });

      const successText = 'Education deleted';
      dispatch(setAlert(successText, 'success'));
      // history.push('/dashboard');
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


// Delete Experience @ /api/profiles/experience/:exp_id
export const deleteExperience = id => dispatch => {
  const configHeaders = getAuthHeaders();

  axios.delete(`/api/profiles/experience/${id}`, configHeaders)
    .then(({ data }) => {

      dispatch({
        type: DELETE_EXPERIENCE,
        payload: data.data
      });

      const successText = 'Experience deleted';
      dispatch(setAlert(successText, 'success'));
     
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


