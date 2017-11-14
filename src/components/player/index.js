import React from "react";
import PropTypes from 'prop-types';
import {playerType} from '../../constants/custom-prop-types';
import {apiUrl} from '../../constants/api';
import Attacks from './attacks';
import Life from './life';
import Actions from './actions';

import './player.css';

class Player extends React.Component { 

	render() {

		return (
    <div>
       <div className="thumbnail">
          <div className="title">
             <h3>{this.props.player.name}</h3>
             {this.props.isFighting ? (<Life />) : null}
             <p>
                <span className="label label-primary">Health: {this.props.player.health}</span>
                <span className="label label-success">Agility: {this.props.player.agility}</span>
                <span className="label label-info">Defense: {this.props.player.defense}</span>
             </p>
          </div>
          <div className="container-image">
             <img src={apiUrl+this.props.player.avatar} alt="player avatar" />
          </div>
          <Attacks enabled={this.props.isFighting && !this.props.isCpu} attacks={this.props.player.attacks} />
       </div>
       {this.props.isFighting ? (<Actions />) : null}
    </div>);
	}
}

Player.propTypes = {
  player: playerType.isRequired,
  isFighting: PropTypes.bool,
  isCpu: PropTypes.bool,
};

Player.defaultProps = {
  isFighting: false,
  isCpu: true
};


export default Player;