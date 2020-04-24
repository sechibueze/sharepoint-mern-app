import { SET_PROFILE, SET_ALL_PROFILES, SET_PROFILE_BY_USER_ID } from '../actions/types';
const initialState = {
  currentProfile: {},
  allProfiles: [],
  profileByUserId: null
};
export default function(state = initialState, action){
  const { type, payload } = action;

  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        currentProfile: payload
      };
    case SET_ALL_PROFILES:
      return {
        ...state,
        allProfiles: payload
      };
    case SET_PROFILE_BY_USER_ID:
      return {
        ...state,
        profileByUserId: payload
      };
    default:
      return state;
  }
};