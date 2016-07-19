import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';

export class Options extends Component {
  // Maps options array as an AccordianItem to render on screen as Accordian
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
    // Loading div when options aren't fetched yet    
    if(Object.keys(this.props.options).length === 0){
      return <div> Fetching Options </div>
    }

    return (
      <div>
        <Accordion className='accordion'>
          {this.props.options.businesses.map(this.renderOption)}
        </Accordion>
      </div>
    )
  }
}

// Connects yelp search results as props to this container
function mapStateToProps(state){
  return {
    options: state.input
  }
}

export default connect(mapStateToProps)(Options);
