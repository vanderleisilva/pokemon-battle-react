import React from "react";
import Header from '../../components/header'
import PlayerFight from '../../components/playerFight'
import FakePlayers from '../../constants/dummy-data/players';
import {connect} from 'react-redux';
import {battle} from '../../actions/playerActions'

const mapStateToProps = (state) => ({ battle: state.battle });

class Battle extends React.Component {

	componentDidMount() {
		this.props.dispatch(battle({ player: FakePlayers[0], against: FakePlayers[1] }));
  	}

	render() {
		return(
			<div>
				<Header>
					<small>poke1</small> X <small>poke2</small>
				</Header>
				<PlayerFight />
	        </div>
		);
	}
}

export default connect(mapStateToProps)(Battle);
