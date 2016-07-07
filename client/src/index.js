import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { AppContainer } from 'react-hot-loader';

import configureStore from './store';

const store = configureStore({});

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </AppContainer>
  , document.querySelector('.appContainer')
);

if(module.hot) {
  module.hot.accept('./routes.js', () => {
    const nextRoutes = require('./routes.js');
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Router history={browserHistory} routes={nextRoutes} />
        </Provider>
      </AppContainer>
      , document.querySelector('.appContainer')
    );
  });
}
