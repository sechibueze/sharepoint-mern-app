import{ SET_ALERT, CLEAR_ALERT } from './types';
import { v4 } from 'uuid';

// Set Alerts
export const setAlert = (text, type = 'danger', timelag = 4000) => dispatch => {
  const id = v4();
  dispatch({
    type: SET_ALERT,
    payload:{id, text, type }
  });

  setTimeout(() => dispatch({ type: CLEAR_ALERT, payload: id}), timelag);
};

// Clear alerts
export const clearAlert = (id) => dispatch => {
  dispatch({
    type: CLEAR_ALERT,
    payload: id
  });
};