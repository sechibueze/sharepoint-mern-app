import { LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR} from '../actions/types';
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null
}
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
     case LOGIN_SUCCESS:
       localStorage.setItem('token', payload);
       return {...state, isAuthenticated: true};

     case LOGIN_FAIL:
       localStorage.setItem('token', null);
       return {
         ...state,
         isAuthenticated: null
        };
    default:
      return state;
  }
};