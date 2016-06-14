import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitInput } from '../actions/index';

class UserInput extends Component {

  render() {
    const { fields: { location, budget, time }, handleSubmit } = this.props;

    return(
      <form>
      </form>
    )
  }

}

export default reduxForm({
  form: 'UserInput',
  fields: ['location', 'budget', 'time']
}, null, { submitInput })(UserInput);
