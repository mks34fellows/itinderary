import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


ReactDOM.render(
 <Router history={browserHistory} routes={routes} />
  , document.querySelector('.container')
);