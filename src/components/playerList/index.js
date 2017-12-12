import React from "react";
import PropTypes from 'prop-types';
import Player from '../player';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ players: state.players });

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

export default connect(mapStateToProps)(PlayerList)
