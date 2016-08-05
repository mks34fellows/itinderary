import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { submitInput } from '../actions/index';
import axios from 'axios';

export class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { latLong: '', isClicked: false, props: null };
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Gets geolocation before page loads. If input has been submitted before geolocation returns,
  // this will call sumbitInput (action) with location as latLong & feeling as props
  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({latLong: position});
        if(this.state.isClicked && this.state.props) {
          this.props.submitInput(this.state.props.feeling, this.state.latLong);
          this.context.router.push('/options');
        }
      });
    }
  }

  static contextTypes = {
    router: PropTypes.object
  };

  // Submits input as action. If geolocation has not been set, this will only set component's
  // state so that submitInput (action) will be called when geolocation returns
  onSubmit(props) {
    this.setState({ isClicked: true, props: props });
    
    if(this.state.latLong !== '') {
      this.props.submitInput(props.feeling, this.state.latLong);
      this.context.router.push('/options');
    }
  }

  // Renders redux-form container with radio inputs for feelings
  render() {
    const { fields: {feeling}, handleSubmit, onChange } = this.props;

    return(
      <form className='reduxForm' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="container">
          <h1> Itinderary </h1>
          <h2 className='feeling'> How are you feeling? </h2>
          <ul>
            <li>
              <input id="adventurous" type="radio" name='feeling' value='adventurous' onChange={feeling.onChange} checked={feeling.value === 'adventurous'} /> 
              <label htmlFor="adventurous">Adventurous</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="classy" type="radio" name='feeling' value='classy' onChange={feeling.onChange} checked={feeling.value === 'classy'} /> 
              <label htmlFor="classy">Classy</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="competitive" type="radio" name='feeling' value='competitive' onChange={feeling.onChange} checked={feeling.value === 'competitive'} />
              <label htmlFor="competitive">Competitive</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="creative" type="radio" name='feeling' value='creative' onChange={feeling.onChange} checked={feeling.value === 'creative'}/> 
              <label htmlFor="creative">Creative</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="frugal" type="radio" name='feeling' value='frugal' onChange={feeling.onChange} checked={feeling.value === 'frugal'} />
              <label htmlFor="frugal">Frugal</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="lazy" type="radio" name='feeling' value='lazy' onChange={feeling.onChange} checked={feeling.value === 'lazy'} />
              <label htmlFor="lazy">Lazy</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="playful" type="radio" name='feeling' value='playful' onChange={feeling.onChange} checked={feeling.value === 'playful'} />
              <label htmlFor="playful">Playful</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="ratchet" type="radio" name='feeling' value='ratchet' onChange={feeling.onChange} checked={feeling.value === 'ratchet'} />
              <label htmlFor="ratchet">Ratchet</label>
              <div className="check"></div>
            </li>

            <li>
              <input id="spontaneous" type="radio" name='feeling' value='spontaneous' onChange={feeling.onChange} checked={feeling.value === 'spontaneous'} />
              <label htmlFor="spontaneous">Spontaneous</label>
              <div className="check"></div>
            </li>

          </ul>
            <button id="button" type="submit">SUBMIT</button>
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


