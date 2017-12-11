import React from "react";
import PlayerList from '../../components/playerList'
import Header from '../../components/header'
import FakePlayers from '../../constants/dummy-data/players'
import {addInputs} from '../../actions/playerActions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  output:state.output
})

class Selection extends React.Component {

	render() {
		return(
			<div>
				<Header>
					<small>select your Pokémon</small>
				</Header>
				<button id="add" onClick={ () => { this.props.dispatch(addInputs(10)) } }>Add</button>
                <PlayerList players={FakePlayers} />
	        </div>
		);
	}
}

export default connect(mapStateToProps)(Selection)
