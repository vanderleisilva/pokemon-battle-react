import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({ battle: state.battle });

class Actions extends React.Component { 

	render() {
		if (this.props.isCpu === undefined) { return false; }

		let battle = this.props.battle;

		if (!battle.started) { return false; }

		let items = this.props.isCpu ? battle.against.actions : battle.player.actions;
		let name = this.props.isCpu ? battle.against.name : battle.player.name;

	    const actions = !items ? [] : items.map((item, index) => (
	    	<p key={index}> 
		    	{name} attacked with <span className="label label-primary">{item.attack}</span><br/>
		    	damage caused: <span className="label label-danger">{item.damage}</span>
		    	<br/><b>{item.desc ? item.desc : ''}</b>
		    </p>
	    ));

	    return(<div className="panel panel-info">
		  <div className="panel-heading">Actions</div>
		  <div className="panel-body" style={{height: '150px',overflow: 'auto'}} >{actions}</div>
		</div>)
	}
}

Actions.propTypes = {
  isCpu: PropTypes.bool
};

export default connect(mapStateToProps)(Actions);