import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './attacks.css';

const mapStateToProps = (state) => ({ battle: state.battle });

class Attacks extends React.Component { 

	render() {
		let battle = this.props.battle;
		let items = this.props.isCpu ? battle.against.attacks : battle.player.attacks;
		let enabled = !this.props.isCpu && battle.started;

		let itemClick = item => { 
			if (!enabled) { return } 

			console.log('entrou')
		}

	    const attacks = items.map((attack, index) => (
	      <li 
	      	key={index} 
	      	onClick={i=>{itemClick(attack)}} 
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
