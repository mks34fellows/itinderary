import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitInput } from '../actions/index';
import axios from 'axios';

class UserInput extends Component {



  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.submitInput(props);
    this.context.router.push('/options');
  }

  render() {
    const { fields: {feeling}, handleSubmit, onChange } = this.props;

    console.log('this is feelings validation',feeling)

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <input type="radio" name='feeling' value='adventurous' onChange={feeling.onChange} checked={feeling.value === 'adventurous'} /> Adventurous
          <input type="radio" name='feeling' value='classy'  onChange={feeling.onChange} checked={feeling.value === 'classy'} /> Classy
          <input type="radio" name='feeling' value='competitive' onChange={feeling.onChange} checked={feeling.value === 'competitive'} /> Competitive
          <input type="radio" name='feeling' value='creative' onChange={feeling.onChange} checked={feeling.value === 'creative'}/> Creative
          <input type="radio" name='feeling' value='lazy' onChange={feeling.onChange} checked={feeling.value === 'lazy'} /> Lazy
          <input type="radio" name='feeling' value='ratchet' onChange={feeling.onChange} checked={feeling.value === 'ratchet'} /> Ratchet
          <button type="submit">Submit</button>
                 {feeling.touched ? feeling.error : ''}
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.feeling) {
    errors.feeling = 'Please select something';
  }
  return errors;
}

export default reduxForm({
  form: 'UserInput',
  fields: ['feeling'],
  validate
}, null, { submitInput })(UserInput);


