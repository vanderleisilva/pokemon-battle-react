import React from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {baseURL} from 'constants/api';

const mapStateToProps = (state) => ({ battle: state.battle });

class EndBattle extends React.Component {

	render() {
		const player = this.props.battle.player; 
		const against = this.props.battle.against;

		let info = (() => {
			if (player.currentHealth > against.currentHealth) {
				return { 
					winner: player.name, 
					looser: against.name, 
					avatar: player.avatar,
					message: 'Congratulations you won!', 
					style: 'fa fa-trophy' 
				}
			}

			return { 
				winner: against.name, 
				looser: player.name,
				avatar: against.avatar, 
				message: 'You lose!', 
				style: 'fa fa-frown-o' 
			}
		})();

		return(
			<div className="container">
				<div className="jumbotron">
					<h1>
						<i className={info.style} aria-hidden="true"></i> {info.message}
					</h1>
					<div className="row">
						<div className="col-md-3">
							<img className="pull-left" src={baseURL+info.avatar} alt={info.winner} /> 
						</div>
						<div className="col-md-9 padding-top">
							<p><b>{info.winner}</b> is the winner!!! <b>{info.loser}</b> had no chances and was destroyed!</p>
							<p>
								<Link className="btn btn-primary btn-lg" to={'/'}>
							        <i className="fa fa-circle-o-notch" aria-hidden="true"></i> Try again
							    </Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(EndBattle);
