import { INPUT_SUBMITTED } from '../actions/index';
const INITIAL_STATE = {}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INPUT_SUBMITTED:
      return action.payload;
    default:
      return state;
  }
};
