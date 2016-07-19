import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import { Provider } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';
import  ConnectedOptions, { Options }  from '../../client/src/containers/itinerary_options.js';

describe('<Options />', () => {

  const wrapper = shallow(<Options options={{ businesses: [{}] }}/>); 

  it('should have an Accordion component', () => {
    expect(wrapper.find(Accordion)).to.have.length(1);
  });

  it('should have an AccordionItem component', () => {
    expect(wrapper.find(AccordionItem)).to.be.defined
  });

  it('should have a div for Fetching Options when data has not loaded', () => {
    expect(wrapper.find('div')).to.be.defined
  });

  it('should have 3 divs per AccordionItem', () => {
    // console.log("the boy", wrapper.find('AccordionItem > div').length);
    expect(wrapper.find('AccordionItem > div').length).to.equal(3)
  });

  it('should have 1 img element per AccordionItem', () => {
    expect(wrapper.find('AccordionItem > img').length).to.equal(1)
  });
})






