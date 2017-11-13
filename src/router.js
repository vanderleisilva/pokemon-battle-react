import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import selection from './pages/selection'
import end from './pages/end'
import battle from './pages/battle'

// import './App.css';


class Router extends Component {
  render() {
    return (
      <div>
      	<h1>Cabeçalho</h1>
      	<Switch>
	      <Route exact path='/' component={selection}/>
	      <Route path='/end' component={end}/>
	      <Route path='/battle' component={battle}/>
	  	</Switch>
      </div>	
    );
  }
}

export default Router;