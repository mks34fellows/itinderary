import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import ConnectedUserInput, { UserInput } from '../../client/src/containers/user_input.js';

describe('<UserInput />', () => {

  const buildForm = () => {
    const props = {
      fields: {
        feeling: ''
      },
      handleSubmit: fn => fn
    }
    return shallow(<UserInput {...props}/>);
  }

  it('should be a form element', () => {

    expect(buildForm().type()).to.equal('form');
  });

  it('should have a button with class buttonContainer', () => {

    expect(buildForm().find('button').hasClass('buttonContainer')).to.equal(true);
  });

  it('should have a submit button', () => {

    expect(buildForm().find('button')).to.have.length(1);
  });

  it('should have nine inputs', () => {

    expect(buildForm().find('input')).to.have.length(9);
  });
});
