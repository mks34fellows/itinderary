import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {

  renderOption(option) {
    return(
      <li className='noBullets' key={option.phone}>
        <div>{option.name}</div>
      </li>
    )
  }

  render() {

    console.log('this is what my server gives me back', this.props.options.businesses);
    
    if(Object.keys(this.props.options).length === 0){
      return <div>Fetching options...</div>
    }

    return (
      <ul>
        <div>{this.props.options.businesses.map(this.renderOption)}</div>
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    options: state.input
  }
}

export default connect(mapStateToProps)(Options);
