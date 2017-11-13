import React from "react";
import PropTypes from 'prop-types';

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
  players: PropTypes.array.isRequired
};

export default PlayerList;