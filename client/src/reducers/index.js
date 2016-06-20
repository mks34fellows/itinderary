import { combineReducers } from 'redux';
import InputReducer from './reducer_input';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  input: InputReducer,
  form: formReducer
});

export default rootReducer;
