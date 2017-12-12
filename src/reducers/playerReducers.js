const initialState = { players: [], battle: { player: null, against: null } }

const playerReducers = (state=initialState, action) => {
    switch (action.type){
        case 'BATTLE_START': 
        	let battle = action.battle;
            return {...state, battle}
        case 'ADD_PLAYER':
        	let players = state.players.concat(action.player);
            return {...state, players} 
        default: 
        	return {...state}

    }
}

export default playerReducers