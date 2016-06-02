import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // searchOptions: {
      //   location: ''
      // }
    };
  }
  
  //obj will come in form of this.state.searchOptions
  setSearch(obj) {
    this.setState({ searchOptions: obj })
  }

  render() {
    return (
      <div>
        <Form setSearch={ obj => this.setSearch(obj) } />
      </div>
    )
  }
};