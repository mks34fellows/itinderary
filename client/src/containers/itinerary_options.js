import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
  render() {

    console.log('this is what my server gives me back', this.props.options);
    
    if(Object.keys(this.props.options).length === 0){
      return <div>Fetching options...</div>
    }

    return (
      <div>
        <div>{this.props.options.location}</div>
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
