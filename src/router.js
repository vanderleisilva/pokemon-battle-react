import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import selection from './pages/selection';
import battle from './pages/battle';
import {connect} from 'react-redux';
import localForage from "localforage";
import axios from 'axios';
import {loadApi} from 'actions/playerActions';
import { BrowserRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({ api: state.api });

class Router extends Component {
  
  constructor(props) {
    super(props);
    localForage.getItem('backends').then(value => {
      if (value) { return props.dispatch(loadApi(value)) }
      axios.get(props.api.url).then(response => {
        let data = {
          selected: response.data[0],          
          engines: response.data          
        };
        localForage.setItem('backends', data);
        props.dispatch(loadApi(data));
      });  
    }); 
  }

  render() {
    return (
      <div>
        {
          this.props.api.selected ? 
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={selection}/>
                <Route path='/battle/:name' component={battle}/>
              </Switch> 
            </BrowserRouter>
          : 
            <div style={{padding: '10px'}}>Carregando dados ...</div>
        }
      </div>	
    );
  }
}

export default connect(mapStateToProps)(Router);
