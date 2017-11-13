import React from "react";
import {playerType} from '../../constants/custom-prop-types';

class Player extends React.Component {

	render() {
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
             <img src="apiUrl+player.avatar" />
          </div>
          <div className="caption">
          </div>
       </div>
    </div>);
	}
}

Player.propTypes = {
  player: playerType.isRequired,
};

export default Player;