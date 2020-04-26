import {REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, SET_CURRENT_USER, LOGOUT} from '../actions/types';
const initialState = {
  token: null,
  isAuthenticated: null,
  user: null,
  loading: false
}
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: true
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { 
        ...state, 
        isAuthenticated: true,
        token: payload
      }

    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        user: null
      };
    default:
      return state;
  }
};