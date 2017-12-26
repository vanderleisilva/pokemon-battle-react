import * as types from 'constants/ActionTypes';

export const battle = (battle) => ({ type: types.BATTLE_START, battle })

export const endBattle = () => ({ type: types.BATTLE_END })

export const addPlayer = (player) => ({ type: types.ADD_PLAYER, player })

export const playerHit = (hit) => ({ type: types.PLAYER_HIT, hit })

export const cpuHit = (hit) => ({ type: types.CPU_HIT, hit })

export const startAttacks = () => ({ type: types.START_ATTACKS })

export const endAttacks = () => ({ type: types.END_ATTACKS })

export const loadApi = (api) => ({ type: types.LOAD_API, api })

export const changeApi = (api) => ({ type: types.CHANGE_API, api })
