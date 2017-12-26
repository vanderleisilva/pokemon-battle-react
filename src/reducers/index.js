import initialState from './initialState';

import battleStart from './slice/battleStart';
import battleEnd from './slice/battleEnd';
import addPlayer from './slice/addPlayer';
import playerHit from './slice/playerHit';
import cpuHit from './slice/cpuHit';
import startAttacks from './slice/startAttacks';
import endAttacks from './slice/endAttacks';
import loadApi from './slice/loadApi';
import changeApi from './slice/changeApi';
import * as types from 'constants/ActionTypes';

function createReducer(initialState, handlers) {
  	return (state = initialState, action) => handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state
}

export default createReducer(initialState, {
    [types.BATTLE_START] : battleStart,
    [types.BATTLE_END] : battleEnd,
    [types.ADD_PLAYER] : addPlayer,
    [types.PLAYER_HIT] : playerHit,
    [types.CPU_HIT] : cpuHit,
    [types.START_ATTACKS] : startAttacks,
    [types.END_ATTACKS] : endAttacks,
    [types.LOAD_API] : loadApi,
    [types.CHANGE_API] : changeApi
});