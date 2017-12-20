const initialBattle = { player: null, against: null, started: false };
const initialState = { players: [], battle: initialBattle }

const playerReducers = (state=initialState, action) => {
    switch (action.type){
        case 'BATTLE_START': 
            let status = {currentHealth: 0, actions: [], currentHealth: 0}
        	
            let battle = action.battle;
            
            battle.player = {...battle.player, status};
            battle.against = {...battle.against, status};
            
            return {...state, battle}
        case 'BATTLE_END': 
            return {...state, battle: initialBattle}
        case 'ADD_PLAYER':
        	let players = state.players.concat(action.player);
            return {...state, players} 
        case 'PLAYER_HIT':
            return {...state}
        case 'CPU_HIT':
            return {...state}
        default: 
        	return {...state}

    }
}

export default playerReducers