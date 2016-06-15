import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import App from './components/app';
import UserInput from './containers/user_input';
import Options from './containers/itinerary_options';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={UserInput} />
    <Route path="options" component={Options} />
  </Route>
);
