import { GET_ALL_POSTS } from '../actions/types';

const initialState = {
  posts: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: payload
      };
  
    default:
      return state;
  }
};