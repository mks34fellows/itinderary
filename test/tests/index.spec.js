import expect from 'expect';
import * as actions from '../../client/src/actions/index.js';

describe('actions', () => {
  it('have properties type and payload', () => {
    const text = 'frugal';
    const location = {coords: { latitude: 'blah', longitude: 'blah'}}
    const expectedAction = ["type", "payload"]

    expect(Object.keys(actions.submitInput(text, location))).toEqual(expectedAction)
  });
});