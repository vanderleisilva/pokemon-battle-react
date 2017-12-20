import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ battle: state.battle });

class Actions extends React.Component { 

	render() {
		let battle = this.props.battle;

		if (!battle.started) { return false; }

		let items = this.props.isCpu ? battle.against.status.actions : battle.player.status.actions;

	    const actions = items.map((item, index) => (
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
  isCpu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Actions);