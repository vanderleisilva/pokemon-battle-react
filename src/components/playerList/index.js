import React from "react";
import Player from 'components/player';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {request} from 'constants/api';
import {addPlayer} from 'actions/playerActions'

const mapStateToProps = (state) => ({ players: state.players });

class PlayerList extends React.Component {

	componentDidMount() {
		if (this.props.players.length > 0) { return; }
		
		request.get('all').then(response => response.data.forEach(i => this.props.dispatch(addPlayer(i))))
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
