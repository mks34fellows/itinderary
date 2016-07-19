import expect from 'expect';
import { createStore } from 'redux';
import inputReducer from '../../../client/src/reducers/reducer_input.js';
import rootReducer from '../../../client/src/reducers/index.js';
import * as actions from '../../../client/src/actions/index.js';

describe('input reducer', () => {

  it('should return the initial state', () => {
    expect(inputReducer(undefined, {})).toEqual({});
  });

  it('should handle INPUT_SUBMITTED', () => {
    const action = {
      type: actions.INPUT_SUBMITTED,
      payload: {
        data: [{}]
      }
    }
    expect(inputReducer(undefined, action)).toEqual([{}]);
  });

});

describe('root reducer', () => {

  it('should have a form and an input state', () => {
    const store = createStore(rootReducer);

    expect(store.getState()).toEqual({ input: {}, form: {} });
  });

});