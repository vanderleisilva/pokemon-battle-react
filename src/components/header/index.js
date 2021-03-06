import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {
		return(
			<div className="page-header">
              <h1><Link to="/">Pokémon Battle</Link> {this.props.children}</h1>
            </div>
		);
	}
}

export default Header;