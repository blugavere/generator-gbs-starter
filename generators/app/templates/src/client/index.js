import './styles/style.css';
console.log('hello world');

/* eslint-disable no-console, import/default */
const React = require('react');
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './startup/route.config';

const initialState = {
    // todo
};

const store = require('./startup/store.config')(initialState);

ReactDOM.render((
<Provider store={store}>
    <Router history={browserHistory} routes={routes(store) } />
</Provider>
), document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  const DevTools = require('./startup/devtools.config');
  ReactDOM.render((
        <Provider store={store}>
        <DevTools />
        </Provider>
    ), document.getElementById('devtools'));
}
