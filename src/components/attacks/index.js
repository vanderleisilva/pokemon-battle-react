import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {request} from 'constants/api';
import {playerHit, cpuHit, startAttacks, endAttacks} from 'actions/playerActions'
import './attacks.css';

const mapStateToProps = (state) => ({ battle: state.battle });

class Attacks extends React.Component { 

	onClick({attack, enabled, battle}){
		if (!enabled) { return } 

		this.props.dispatch(startAttacks());	

		let param = {
		    player : {
		        name : battle.player.name,
		        currentHealth : battle.player.currentHealth,
		        attack : attack.name
		    },
		    against : {
		        name : battle.against.name,
		        currentHealth : battle.against.currentHealth
		    }
		}

		request.post('hit', param).then(response => {

			let player = response.data.player;
			delete player.name;
			this.props.dispatch(playerHit(player));

			setTimeout(() => {
				let against = response.data.against;
				delete against.name;
				this.props.dispatch(cpuHit(against));
				this.props.dispatch(endAttacks());
			}, 5000)
		});	
	}

	render() {
		let battle = this.props.battle;
		let items = this.props.isCpu ? battle.against.attacks : battle.player.attacks;
		let enabled = !this.props.isCpu && battle.started;

	    const attacks = !items ? [] : items.map((attack, index) => (
	      <li 
	      	key={index} 
	      	onClick={i=>{this.onClick({attack, enabled, battle})}} 
	      	className={enabled ? "list-group-item attack-click" : "list-group-item"} 
	      	title={enabled ? 'Click to trigger attack' : ''} >
	        
	        <span className="attack-name">{attack.name}:</span>
	        <span title="Type" className="label label-default">{attack.type}</span>
	        <span className="label label-danger">Power: {attack.power}</span>
	        <span title="Accuracy" className="label label-warning">Acc.: {attack.accuracy}</span>
	      
	      </li>
	    ));

	    return(<div className="caption"><ul title="Attacks" className="list-group">{attacks}</ul></div>)
	}
}

Attacks.propTypes = {
  isCpu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Attacks);
