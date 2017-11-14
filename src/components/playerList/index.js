import React from "react";
import PropTypes from 'prop-types';
import Player from '../player';
import {playerType} from '../../constants/custom-prop-types';
import { Link } from 'react-router-dom';

class PlayerList extends React.Component {

	render() {
		const items = this.props.players.map((player, index) =>
	      <Link key={index} className="col-md-3" to={`/battle/${player.name}`}>
	        <Player player={player} />
	      </Link>
	    );

		return <div>{items}</div>;
	}
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(playerType).isRequired
};

export default PlayerList;