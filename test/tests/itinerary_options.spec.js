import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import { Accordion, AccordionItem } from 'react-sanfona';
import  ConnectedOptions, { Options }  from '../../client/src/containers/itinerary_options.js';

describe('<Options />', () => {

  it('should have an Accordion component', () => {
    const wrapper = shallow(<Options options={{ businesses: [] }}/>);
    expect(wrapper.find(Accordion)).to.have.length(1);
  });

  it('should have an AccordionItem component', () => {
    const wrapper = shallow(<Options options={{ businesses: [] }} />)
    expect(wrapper.find(AccordionItem)).to.be.defined
  });

  it('should have a div for Fetching Options when data has not loaded', () => {
    const wrapper = shallow(<Options options={{ businesses: [] }} />)
    expect(wrapper.find('div')).to.be.defined
  });

  it('should have 3 divs per AccordionItem', () => {
    const wrapper = shallow(<Options options={{ businesses: [{}] }} />)
    // console.log("the boy", wrapper.find('AccordionItem > div').length);
    expect(wrapper.find('AccordionItem > div').length).to.equal(3)
  });
})


