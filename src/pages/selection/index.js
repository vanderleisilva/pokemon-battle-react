import React from "react";
import PlayerList from '../../components/playerList'
import FakePlayers from '../../constants/dummy-data/players'

class Selection extends React.Component {

	handlePlayerSelect(player) {
		
	}

	render() {
		return(
			<div>
	            <div className="page-header">
                  <h1>Pokémon Battle <small>select your Pokémon</small></h1>
                </div>
                <PlayerList players={FakePlayers} onSelect={this.handlePlayerSelect} />
	        </div>
		);
	}
}

export default Selection;