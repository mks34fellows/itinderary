import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1>Itinderary</h1>
      <h2>Feeling...</h2>
        {this.props.children}
      </div>
    )
  }
};
