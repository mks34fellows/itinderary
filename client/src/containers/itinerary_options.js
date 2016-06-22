import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
  render() {
    return (
      <div>
        <div style={{color:'green'}}>{this.props.options.location}</div>
        <div>{this.props.options.budget}</div>
        <div>{this.props.options.startTime}</div>
        <div>{this.props.options.endTime}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    options: state.input
  }
}

export default connect(mapStateToProps)(Options);
