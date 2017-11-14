import React from "react";
import PropTypes from 'prop-types';

class Life extends React.Component { 

	render() {
	    return(
	    	<div title="Life" className="progress">
			  <div 
			  	className="progress-bar progress-bar-success" 
			  	role="progressbar" 
			  	aria-valuenow={this.props.current} 
			  	aria-valuemin="0" 
			  	aria-valuemax="100" 
			  	style={{ width: this.props.current + '%' }}>
			    {this.props.current}%
			  </div>
			</div>
	    )
	}
}

Life.propTypes = {
  current: PropTypes.number
};

Life.defaultProps = {
  current: 100
};

export default Life;