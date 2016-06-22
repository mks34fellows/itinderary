import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducers from './reducers';

import { AppContainer } from 'react-hot-loader';

import store from './store';

const createStoreWithMiddleware = store();


ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </AppContainer>
  , document.querySelector('.container'));

if(module.hot) {
  module.hot.accept('./routes.js', () => {
    const nextRoutes = require('./routes.js');
    ReactDOM.render(
      <AppContainer>
        <Provider store={createStoreWithMiddleware(reducers)}>
          <Router history={browserHistory} routes={nextRoutes} />
        </Provider>
      </AppContainer>
      , document.querySelector('.container'));
  });
}
