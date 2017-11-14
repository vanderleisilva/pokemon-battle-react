import React from "react";
import PropTypes from 'prop-types';
import {attackType} from '../../../constants/custom-prop-types';

import './attacks.css';

class Attacks extends React.Component { 

	render() {
		let itemClick = item => { if (this.props.onSelect && this.props.enabled) { this.props.onSelect(item) } }

		let itemClass = this.props.enabled ? "list-group-item attack-click" : "list-group-item";

	    const attacks = this.props.attacks.map((attack, index) => (
	      <li key={index} onClick={i=>{itemClick(attack)}} className={itemClass} title={this.props.enabled ? 'Click to trigger attack' : ''} >
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
  attacks: PropTypes.arrayOf(attackType).isRequired,
  enabled: PropTypes.bool,
  onSelect: PropTypes.func,
};

Attacks.defaultProps = {
  enabled: false
};

export default Attacks;