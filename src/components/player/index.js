import React from "react";
import PropTypes from 'prop-types';
import {playerType} from 'constants/custom-prop-types';
import {baseURL} from 'constants/api';
import Attacks from 'components/attacks';
import Life from 'components/life';
import Actions from 'components/actions';

import './player.css';

class Player extends React.Component { 

	render() {

		return (
    <div>
       <div className="thumbnail">
          <div className="title">
             <h3>{this.props.player.name}</h3>
             <Life isCpu={this.props.isCpu} />
             <p>
                <span className="label label-primary">Health: {this.props.player.health}</span>
                <span className="label label-success">Agility: {this.props.player.agility}</span>
                <span className="label label-info">Defense: {this.props.player.defense}</span>
             </p>
          </div>
          <div className="container-image">
             <img src={baseURL+this.props.player.avatar} alt="player avatar" />
          </div>
          <Attacks isCpu={this.props.isCpu} />
       </div>
       <Actions isCpu={this.props.isCpu} />
    </div>);
	}
}

Player.propTypes = {
  player: playerType.isRequired,
  isCpu: PropTypes.bool.isRequired,
};

export default Player;