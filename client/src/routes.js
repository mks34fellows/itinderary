import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './components/app';
import HelloWorld from './components/helloworld';
import Form from './components/form';


export default (
  <Router history={browserHistory}> 
    <Route path="/" component={Form} />
    <Route path="/submitted" component={HelloWorld} />
  </Router>
);

