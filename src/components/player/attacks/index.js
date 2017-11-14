import React from "react";
import PropTypes from 'prop-types';
import {attackType} from '../../../constants/custom-prop-types';

class Attacks extends React.Component { 

	render() {
	    const attacks = this.props.attacks.map((attack, index) => (
	      <li key={index} className="list-group-item">
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
  attacks: PropTypes.arrayOf(attackType).isRequired
};

export default Attacks;