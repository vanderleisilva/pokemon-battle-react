const initialBattle = { player: null, against: null, started: false };
const initialState = { players: [], battle: initialBattle }

const playerReducers = (state=initialState, action) => {
    switch (action.type){
        case 'BATTLE_START': 
        	let battle = action.battle;
            return {...state, battle}
        case 'BATTLE_END': 
            return {...state, battle: initialBattle}
        case 'ADD_PLAYER':
        	let players = state.players.concat(action.player);
            return {...state, players} 
        default: 
        	return {...state}

    }
}

export default playerReducers