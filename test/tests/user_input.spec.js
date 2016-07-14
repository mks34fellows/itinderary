import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import UserInput from '../../client/src/containers/user_input.js';

describe('<UserInput>', () => {
  it('should have a form element', () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper.find('form')).to.have.length(0);
  });

  it('should render nine labels', () => {
    const wrapper = shallow(<UserInput />);

    expect(wrapper.find('.feeling')).to.have.length(1);
  });
});
