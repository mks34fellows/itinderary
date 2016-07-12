import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';

class Options extends Component {

  renderOption(option) {
    return(
      <AccordionItem title={`${option.name}`} expanded key={option.id}>
        <div> Address </div>
        <div> Phone: {option.display_phone} </div>
        <div> Rating: {option.rating} </div>
        <img src={option.image_url} />
      </AccordionItem>
    )
  }

  render() {

    console.log('this is what my server gives me back', this.props.options.businesses);
    
    if(Object.keys(this.props.options).length === 0){
      return <div> Fetching Options </div>
    }

    return (
      <Accordion className='accordion'>
        {this.props.options.businesses.map(this.renderOption)}
      </Accordion>
    )
  }
}

function mapStateToProps(state){
  return {
    options: state.input
  }
}

export default connect(mapStateToProps)(Options);
