import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitInput } from '../actions/index';
import axios from 'axios';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { latLong: '', isClicked: false, props: null };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        this.setState({latLong: position});
        if(this.state.isClicked && this.state.props) {
          this.props.submitInput(this.state.props, this.state.latLong);
          this.context.router.push('/options');
        }
      });
    }
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.setState({ isClicked: true, props: props });
    if(this.state.latLong !== '') {
      this.props.submitInput(this.state.props, this.state.latLong);
      this.context.router.push('/options');
    }
  }

  render() {
    const { fields: {feeling}, handleSubmit, onChange } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <input type="radio" name='feeling' value='adventurous' onChange={feeling.onChange} checked={feeling.value === 'adventurous'} /> Adventurous
          <input type="radio" name='feeling' value='classy'  onChange={feeling.onChange} checked={feeling.value === 'classy'} /> Classy
          <input type="radio" name='feeling' value='competitive' onChange={feeling.onChange} checked={feeling.value === 'competitive'} /> Competitive
          <input type="radio" name='feeling' value='creative' onChange={feeling.onChange} checked={feeling.value === 'creative'}/> Creative
          <input type="radio" name='feeling' value='frugal' onChange={feeling.onChange} checked={feeling.value === 'frugal'} /> Frugal
          <input type="radio" name='feeling' value='lazy' onChange={feeling.onChange} checked={feeling.value === 'lazy'} /> Lazy
          <input type="radio" name='feeling' value='playful' onChange={feeling.onChange} checked={feeling.value === 'playful'} /> Playful
          <input type="radio" name='feeling' value='ratchet' onChange={feeling.onChange} checked={feeling.value === 'ratchet'} /> Ratchet
          <input type="radio" name='feeling' value='spontaneous' onChange={feeling.onChange} checked={feeling.value === 'spontaneous'} /> Spontaneous
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


