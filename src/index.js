import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import Router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
    	<Router />
  	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
