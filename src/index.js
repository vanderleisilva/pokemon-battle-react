import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './app/App';
// import Battle from './battle/battle';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
    	<Router />
  	</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
