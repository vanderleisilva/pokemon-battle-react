import React from "react";
import PropTypes from 'prop-types';
import {playerType} from '../../constants/custom-prop-types';

class PlayerList extends React.Component {

	render() {
		const items = this.props.players.map((player, index) =>
            <div key={index} className="col-md-3">
            	<div className="thumbnail"></div>
            </div>
        );

		return <div>{items}</div>;
	}
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(playerType).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default PlayerList;