import React from "react";
import PropTypes from 'prop-types';
import {actionType} from '../../../constants/custom-prop-types';

class Actions extends React.Component { 

	render() {
	    const actions = this.props.actions.map((item, index) => (
	    	<p key={index}> 
		    	{item.name} attacked with <span className="label label-primary">{item.attack}</span><br/>
		    	damage caused: <span className="label label-danger">{item.damage}</span>
		    	<br/><b>{item.desc ? item.desc : ''}</b>
		    </p>
	    ));

	    return(<div className="panel panel-info">
		  <div className="panel-heading">Actions</div>
		  <div className="panel-body">{actions}</div>
		</div>)
	}
}

Actions.propTypes = {
  actions: PropTypes.arrayOf(actionType)
};

Actions.defaultProps = {
  actions: []
};

export default Actions;