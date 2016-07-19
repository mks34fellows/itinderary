import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import promise from 'redux-promise';
import axios from 'axios';

import * as actions from '../../../client/src/actions/index.js';

const middlewares = [ promise ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('have properties type and payload', () => {
    const text = 'frugal';
    const location = {coords: { latitude: 'blah', longitude: 'blah'}}
    const expectedAction = ["type", "payload"]

    expect(Object.keys(actions.submitInput(text, location))).toEqual(expectedAction)
  });
});

xdescribe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  it('creates INPUT_SUBMITTED when action is finished', () => {
    nock.disableNetConnect();
    nock.enableNetConnect('127.0.0.1');

    nock('127.0.0.1')
    .get('/yelp')
    .reply(200, { body: { spot: ['hello'] } });

    const expectedAction = {
      type: actions.INPUT_SUBMITTED,
      payload: { spot: ['hello'] }
    }

    const store = mockStore({ spot: [] })
    const location = {coords: { latitude: 'blah', longitude: 'blah'}}
    console.log('this is gonna be a crazy big object', store);


    store.dispatch(actions.submitInput)
    .then(() => {
      expect(store.submitInput('spontaneous', location)).toEqual(expectedAction);
    });

  });

  it('should dispatch an action', () => {

    const getState = {};
    const INPUT_SUBMITTED = { type: actions.INPUT_SUBMITTED };

    const store = mockStore(getState);
    store.dispatch(INPUT_SUBMITTED);

    const dispatchedAction = store.getActions();

    expect(dispatchedAction).toEqual([INPUT_SUBMITTED]);
  });

});
