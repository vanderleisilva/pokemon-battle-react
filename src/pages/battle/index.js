import React from "react";
import Header from 'components/header'
import PlayerFight from 'components/playerFight'
import {request} from 'constants/api';
import {connect} from 'react-redux';
import {battle} from 'actions/playerActions'

const mapStateToProps = (state, ownProps) => ({ 
	battle: state.battle, 
	selected: ownProps.match.params 
});

class Battle extends React.Component {

	componentDidMount() {
		request.post('select', this.props.selected).then(response => { 
			this.props.dispatch(battle({ 
				player: response.data.player, 
				against: response.data.against 
			}));
		});
  	}

	render() {
		const player = this.props.battle.player ? this.props.battle.player.name : ''; 
		const against = this.props.battle.against ? this.props.battle.against.name : ''; 
		return(
			<div>
				<Header>
					<small>{player}</small> X <small>{against}</small>
				</Header>
				<PlayerFight />
	        </div>
		);
	}
}

export default connect(mapStateToProps)(Battle);
