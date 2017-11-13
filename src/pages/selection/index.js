import React from "react";
import PlayerList from '../../components/playerList'

class Selection extends React.Component {

	render() {
		return(
			<div>
	            <div class="page-header">
                  <h1>Meu carrinho <small>produtos selecionados para compra</small></h1>
                </div>
                <PlayerList />
	        </div>
		);
	}
}

export default Selection;