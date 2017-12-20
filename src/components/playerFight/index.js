import React from "react";
import Player from 'components/player';
import {connect} from 'react-redux';
import './playerFight.css';

const mapStateToProps = (state) => ({ battle: state.battle });

class PlayerFight extends React.Component {

	render() {
		return(
		<div>
			<div className="row">
			    <div className="col-xs-6">
				    <div className="player">
				    	{this.props.battle.player ? <Player player={this.props.battle.player} isCpu={false} /> : '' }
				    </div>
			    </div>
			    <div className="col-xs-6">
				    <div className="player">
				    	{this.props.battle.against ? <Player player={this.props.battle.against} isCpu={true} /> : '' }
				    </div>
			    </div>
			</div>
		</div>);
	}
}

export default connect(mapStateToProps)(PlayerFight);