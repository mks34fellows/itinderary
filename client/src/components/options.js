import React, { Component } from 'react';

class Options extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }
  render() {
    return (
      <div>
        <input type='text' onChange={ event=> this.props.setSearch({ location: event.target.value }) } placeholder='Location'/>
        <button type='button'>Submit</button>
      </div>
    );
  }
};

export default Options;
