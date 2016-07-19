import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducer from './reducers/index';

export default function configureStore(initialState) {
  // Creates store for application state. Also applies promise middleware
  // to resolve promises before action hits reducer
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        promise
      )
    )
  );

  // For HMR
  if(module.hot) {
    module.hot.accept(() => {
      const nextReducer = require('./reducers/index.js');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
