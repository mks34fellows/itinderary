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
    const { fields: { location, timeOfDay, hungry }, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label>Location</label>
          <input type="text" {...location} />
        </div>
        <div>
          <label>Time</label>
          <select value="morning" {...timeOfDay}>
            <option defaultValue="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        <div>
          <label>Hungry?</label>
          <input type="checkbox" name="hungry" value={true} {...hungry} />
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'UserInput',
  fields: ['location', 'timeOfDay', 'hungry']
}, null, { submitInput })(UserInput);
