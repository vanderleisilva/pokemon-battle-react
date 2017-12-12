import React from "react";
import PlayerList from '../../components/playerList'
import Header from '../../components/header'

class Selection extends React.Component {
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

export default Selection;