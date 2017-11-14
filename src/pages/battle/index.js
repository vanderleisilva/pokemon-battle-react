import React from "react";
import Header from '../../components/header'
import PlayerFight from '../../components/playerFight'
import FakePlayers from '../../constants/dummy-data/players';

class Battle extends React.Component {

	render() {
		return(
			<div>
				<Header>
					<small>poke1</small> X <small>poke2</small>
				</Header>
				<PlayerFight player={FakePlayers[0]} against={FakePlayers[1]} />
	        </div>
		);
	}
}

export default Battle;