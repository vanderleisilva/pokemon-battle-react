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

function createReducer(initialState, handlers) {
  	return (state = initialState, action) => handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state
}

export default createReducer(initialState, {
    'BATTLE_START' : battleStart,
    'BATTLE_END' : battleEnd,
    'ADD_PLAYER' : addPlayer,
    'PLAYER_HIT' : playerHit,
    'CPU_HIT' : cpuHit,
    'START_ATTACKS' : startAttacks,
    'END_ATTACKS' : endAttacks,
    'LOAD_API' : loadApi,
    'CHANGE_API' : changeApi
});