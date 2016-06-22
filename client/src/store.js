import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducer from './reducers';

export default function configureStore() {
  const store = applyMiddleware(promise)(createStore);

  if(module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}
