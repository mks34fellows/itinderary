import React, { Component } from 'react';
import Location from './location';
import {browserHistory} from 'react-router';


class Form extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleClick = this.handleClick.bind(this);
    console.log(context.router);
  }

  handleClick(e) {
    console.log(e.target.value);
    browserHistory.push('/submitted');

  }

  render() {
    return (
      <div>
        <Location />
        <button type='button' onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
};


export default Form;
