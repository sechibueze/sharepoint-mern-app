import { SET_ALERT, CLEAR_ALERT } from '../actions/types';
const initialState = {
  messages: []
}
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {...state, messages: [...state.messages, payload]};

    case CLEAR_ALERT:
       return { ...state, messages: state.messages.filter(msg => msg.id !== payload)};
    default:
      return state;
  }
};