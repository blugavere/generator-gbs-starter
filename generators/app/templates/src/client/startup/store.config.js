
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer.config';
const DevTools = require('./devtools.config');

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  );
  return createStore(rootReducer, initialState, enhancer);
};

module.exports = configureStore;