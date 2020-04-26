import { 
  SET_PROFILE, 
  SET_ALL_PROFILES, 
  SET_PROFILE_BY_USER_ID,
  CREATE_PROFILE,
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  DELETE_EDUCATION,
  DELETE_EXPERIENCE
} from '../actions/types';
const initialState = {
  currentProfile: null,
  allProfiles: [],
  profileByUserId: null,
  addEducation: null,
  createProfile: null,
  addExperience: null,
  deleteExperience: null,
  deleteEducation: null
};
export default function(state = initialState, action){
  const { type, payload } = action;

  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        currentProfile: payload
      };
    case CREATE_PROFILE:
      return {
        ...state,
        createProfile: payload
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
    case ADD_EDUCATION:
      return {
        ...state,
        addEducation: payload
      }
    case ADD_EXPERIENCE:
      return {
        ...state,
        addExperience: payload
      }
    case DELETE_EXPERIENCE:
      return {
        ...state,
        deleteExperience: payload
      }
    case DELETE_EDUCATION:
      return {
        ...state,
        deleteEducation: payload
      }
    default:
      return state;
  }
};