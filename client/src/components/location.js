import React, { Component } from 'react';

class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }
  }
  render() {
    return (
      <div>
        <input type='text' placeholder='Location'/>
      </div>
    );
  }
};

export default Location;
