import React from "react";
import {playerType} from '../../constants/custom-prop-types';
import {apiUrl} from '../../constants/api';

import './player.css';

class Player extends React.Component { 

	render() {

    const attacks = this.props.player.attacks.map((attack, index) => (
      <li key={index} className="list-group-item">
        <span className="attack-name">{attack.name}:</span>
        <span title="Type" className="label label-default">{attack.type}</span>
        <span className="label label-danger">Power: {attack.power}</span>
        <span title="Accuracy" className="label label-warning">Acc.: {attack.accuracy}</span>
      </li>
    )) || [];

		return (
    <div>
       <div className="thumbnail">
          <div className="title">
             <h3>{this.props.player.name}</h3>
             <p>
                <span className="label label-primary">Health: {this.props.player.health}</span>
                <span className="label label-success">Agility: {this.props.player.agility}</span>
                <span className="label label-info">Defense: {this.props.player.defense}</span>
             </p>
          </div>
          <div className="container-image">
             <img src={apiUrl+this.props.player.avatar} alt="player avatar" />
          </div>
          <div className="caption">
            <ul title="Attacks" className="list-group">{attacks}</ul>
          </div>
       </div>
    </div>);
	}
}

Player.propTypes = {
  player: playerType.isRequired
};

export default Player;