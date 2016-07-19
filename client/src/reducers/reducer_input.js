import { INPUT_SUBMITTED } from '../actions/index';
const INITIAL_STATE = {};

// Sets state to return value from our server based on yelp search
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INPUT_SUBMITTED:
      return action.payload.data;
    default:
      return state;
  }
};
