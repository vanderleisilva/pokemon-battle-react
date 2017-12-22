import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ battle: state.battle });

class Life extends React.Component { 

	render() {
		if (this.props.isCpu === undefined) { return false; }
		
		let battle = this.props.battle;

		if (!battle.started) { return false; }

		let current = this.props.isCpu ? battle.against.currentHealth : battle.player.currentHealth; 
		let total = this.props.isCpu ? battle.against.health : battle.player.health; 
		let percentage = ((100*current)/total).toFixed(0);

	    return(
	    	<div title="Life" className="progress">
			  <div 
			  	className="progress-bar progress-bar-success" 
			  	role="progressbar" 
			  	aria-valuenow={current} 
			  	aria-valuemin="0" 
			  	aria-valuemax={total} 
			  	style={{ width: percentage + '%' }}>
			    {percentage}%
			  </div>
			</div>
	    )
	}
}

Life.propTypes = {
  isCpu: PropTypes.bool
};

export default connect(mapStateToProps)(Life);
