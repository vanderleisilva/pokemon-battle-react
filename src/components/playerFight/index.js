import React from "react";
import Player from '../player';
import {playerType} from '../../constants/custom-prop-types';

import './playerFight.css';

class PlayerFight extends React.Component {

	render() {
		return(
		<div>
			<div className="row">
			    <div className="col-xs-6">
				    <div className="player">
				    	<Player player={this.props.player} />
				    </div>
			    </div>
			    <div className="col-xs-6">
				    <div className="player">
				    	<Player player={this.props.against} />
				    </div>
			    </div>
			</div>
		</div>);
	}
}

PlayerFight.propTypes = {
  player: playerType.isRequired,
  against: playerType.isRequired
};

export default PlayerFight;