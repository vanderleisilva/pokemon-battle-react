import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import playerReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import Router from './router';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	playerReducer,/* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(logger)
)

ReactDOM.render((
	<Provider store={store}>
    	<Router />
  	</Provider>
), document.getElementById('root'));
registerServiceWorker();
