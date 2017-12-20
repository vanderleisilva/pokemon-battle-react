import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ battle: state.battle });

class Life extends React.Component { 

	render() {
		let battle = this.props.battle;

		if (!battle.started) { return false; }

		let current = this.props.isCpu ? battle.against.status.currentHealth : battle.player.status.currentHealth; 
		let total = this.props.isCpu ? battle.against.health : battle.player.health; 

	    return(
	    	<div title="Life" className="progress">
			  <div 
			  	className="progress-bar progress-bar-success" 
			  	role="progressbar" 
			  	aria-valuenow={current} 
			  	aria-valuemin="0" 
			  	aria-valuemax={total} 
			  	style={{ width: current + '%' }}>
			    {current}%
			  </div>
			</div>
	    )
	}
}

Life.propTypes = {
  isCpu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Life);
