import React from "react";
import PlayerList from '../../components/playerList'
import Header from '../../components/header'
import FakePlayers from '../../constants/dummy-data/players'

class Selection extends React.Component {

	render() {
		return(
			<div>
				<Header>
					<small>select your Pokémon</small>
				</Header>
                <PlayerList players={FakePlayers} />
	        </div>
		);
	}
}

export default Selection;