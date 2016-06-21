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
    const { fields: { location, budget, startTime, endTime }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label>Location</label>
          <input type="text" {...location} />
        </div>

        <div>
          <label style={{color: 'blue'}}>Budget</label>
          <select {...budget}>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>

        <div>
          <label>Start Time</label>
          <input type="time" {...startTime} />
        </div>

        <div>
          <label>End Time</label>
          <input type="time" {...endTime} />
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'UserInput',
  fields: ['location', 'budget', 'startTime', 'endTime']
}, null, { submitInput })(UserInput);
