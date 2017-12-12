import React from "react";
import PlayerList from '../../components/playerList'
import Header from '../../components/header';
import {endBattle} from '../../actions/playerActions'

import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ started: state.battle.started });

class Selection extends React.Component {

	componentDidMount() {
		if (this.props.started === true) {
			this.props.dispatch(endBattle());
		}
  	}

	render() {
		return(
			<div>
				<Header>
					<small>select your Pokémon</small>
				</Header>
                <PlayerList />
	        </div>
		);
	}
}

export default connect(mapStateToProps)(Selection)