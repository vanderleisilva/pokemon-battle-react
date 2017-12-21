const initialBattle = { player: { actions: [] }, against: { actions: [] }};
const initialState = { players: [], battle: initialBattle}

const playerReducers = (state=initialState, action) => {
    let newState = {...state}, battle;  

    switch (action.type){
        case 'BATTLE_START': 
            battle = action.battle;
            battle.player = {...battle.player, currentHealth: battle.player.health, actions: []};
            battle.against = {...battle.against, currentHealth: battle.against.health, actions: []};
            battle.started = true;
            return {...newState, battle}
        case 'BATTLE_END': 
            return {...newState, battle: initialBattle}
        case 'ADD_PLAYER':
        	let players = state.players.concat(action.player);
            return {...newState, players} 
        case 'PLAYER_HIT':
            return {
                ...newState, 
                battle: {
                    ...newState.battle,
                    player: {
                       ...newState.battle.player,
                       actions: [action.hit, ...newState.battle.player.actions]                       
                    },
                    against: {
                        ...newState.battle.against,
                        currentHealth: newState.battle.against.currentHealth - action.hit.damage
                    }
                }
            };
        case 'CPU_HIT':
            return {
                ...newState, 
                battle: {
                    ...newState.battle,
                    against: {
                       ...newState.battle.against,
                       actions: [action.hit, ...newState.battle.against.actions]
                    },
                    player: {
                        ...newState.battle.player,
                        currentHealth: newState.battle.player.currentHealth - action.hit.damage
                    }
                }
            };
        case 'START_ATTACKS':
            return {
                ...newState, 
                battle: {
                    ...newState.battle,
                    onAttack: true
                }
            };
        case 'END_ATTACKS':
            return {
                ...newState, 
                battle: {
                    ...newState.battle,
                    onAttack: false
                }
            };
        default: 
        	return newState;

    }
}

export default playerReducers