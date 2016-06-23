import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducer from './reducers/index';

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        promise
      )
    )
  );

  if(module.hot) {
    module.hot.accept(() => {
      const nextReducer = require('./reducers/index.js');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
