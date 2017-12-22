import React from "react";
import Header from 'components/header'
import PlayerFight from 'components/playerFight'
import EndFight from 'components/endFight'
import ApiChange from 'components/apiChange'
import axios from 'axios';
import {connect} from 'react-redux';
import {battle} from 'actions/playerActions'

const mapStateToProps = (state, ownProps) => ({ 
	battle: state.battle, 
	url: state.api.selected.url,
	selected: ownProps.match.params 
});

class Battle extends React.Component {

	componentDidMount() {
		axios.post(`${this.props.url}/select`, this.props.selected).then(response => { 
			this.props.dispatch(battle({ 
				player: response.data.player, 
				against: response.data.against 
			}));
		});
  	}

	render() {
		const player = this.props.battle.player; 
		const against = this.props.battle.against;
		let status = player.currentHealth <= 0 || against.currentHealth <= 0;

		return(
			<div>
				{status ? 
					<Header><small>{'End of battle'}</small><ApiChange/></Header> 
				: 
					<Header><small>{player.name}</small> X <small>{against.name}</small><ApiChange/></Header>
				}

				{status ? <EndFight /> : <PlayerFight />}
	        </div>
		);
	}
}

export default connect(mapStateToProps)(Battle);
