import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { backClicked } from '../actions/index';
import { Accordion, AccordionItem } from 'react-sanfona';
import { bindActionCreators } from 'redux';

export class Options extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  // Maps options array as an AccordianItem to render on screen as Accordian
  renderOption(option) {

    return (
      <AccordionItem className='accordionItem' title={`> ${option.name}`} expanded key={option.id}>
        <div className='listColor'> Address: {option.location.display_address.join(', ')} </div>
        <div className='listColor'> Phone: {option.display_phone ? option.display_phone.slice(3) : '' } </div>
        <div className='listColor'> Rating: {option.rating} </div>
        <img src={option.image_url} />
      </AccordionItem>
    )
  }

  handleClick() {
    this.props.backClicked();
    this.context.router.push('/');
  }

  render() {
    if(Object.keys(this.props.options).length === 0){
      return <img className='loading' src="http://closera.com/skin/frontend/bizarre/skin2_new/images/Loading1.gif" width="500" height="500"/>
    }

    return (
      <div>
        <div>
          <h1 className='title'> Itinderary </h1>
        </div>
        <Accordion className='accordion'>
          {this.props.options.businesses.map(this.renderOption)}
        </Accordion>
        <button className="backButton" type="button" onClick={this.handleClick.bind(this)}>Back</button>
      </div>
    )
  }
};

// Connects yelp search results as props to this container
function mapStateToProps(state){
  return {
    options: state.input
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ backClicked }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
