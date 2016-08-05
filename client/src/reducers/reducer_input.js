import { INPUT_SUBMITTED, BACK_CLICKED } from '../actions/index';
const INITIAL_STATE = {};

// Sets state to return value from our server based on yelp search
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INPUT_SUBMITTED:
      return action.payload.data;
    case BACK_CLICKED:
      return action.payload;
    default:
      return state;
  }
};
