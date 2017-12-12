import React from "react";
import Player from '../player';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import FakePlayers from '../../constants/dummy-data/players'
import {addPlayer} from '../../actions/playerActions'

const mapStateToProps = (state) => ({ players: state.players });

class PlayerList extends React.Component {

	componentDidMount() {
		if (!this.props.players.length) {
			FakePlayers.forEach(i => this.props.dispatch(addPlayer(i)));
		}
  	}

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
