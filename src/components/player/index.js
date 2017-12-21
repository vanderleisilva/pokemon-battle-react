import React from "react";
import PropTypes from 'prop-types';
import {playerType} from 'constants/custom-prop-types';
import {baseURL} from 'constants/api';
import Attacks from 'components/attacks';
import Life from 'components/life';
import Actions from 'components/actions';
import {connect} from 'react-redux';

import './player.css';

const mapStateToProps = (state) => ({ onAttack: state.battle.onAttack });

class Player extends React.Component { 

	render() {

    let attacking = this.props.onAttack ? (<div className="attacking bg-danger" title={this.props.player.name + ' is attacking'}>
      On attack! <i className="fa fa-bolt" aria-hidden="true"></i>
    </div>) : false; 

    let condition = (() => {
      if (this.props.isCpu==undefined) { return { style: 'thumbnail with-hover' } }

      let percentage = ((100*this.props.player.currentHealth)/this.props.player.health);

      if (percentage < 26) {  return { style: 'thumbnail danger', title: this.props.player.name + ' is about to die'  } }

      if (percentage < 51) {  return { style: 'thumbnail warning', title: this.props.player.name + ' doesn`t have too much health left'  } }

      return { style: 'thumbnail', title: this.props.player.name + ' is in a good condition'  }   
    })();

		return (
    <div>
       <div className={condition.style} title={condition.title}>
          <div className="title">
             {attacking}
             <h3>{this.props.player.name}</h3>
             <Life isCpu={this.props.isCpu} />
             <p>
                <span className="label label-primary">Health: {this.props.player.health}</span>
                <span className="label label-success">Agility: {this.props.player.agility}</span>
                <span className="label label-info">Defense: {this.props.player.defense}</span>
             </p>
          </div>
          <div className="container-image">
             <img src={baseURL+this.props.player.avatar} alt="player avatar" />
          </div>
          <Attacks isCpu={this.props.isCpu} attacks={this.props.isCpu == undefined ? this.props.player.attacks : false} />
       </div>
       <Actions isCpu={this.props.isCpu} />
    </div>);
	}
}

Player.propTypes = {
  player: playerType.isRequired,
  isCpu: PropTypes.bool,
};

export default connect(mapStateToProps)(Player);
