import FakePlayers from '../constants/dummy-data/players'

const initialState = { players: FakePlayers }

const playerReducers = (state=initialState, action) => {
    switch (action.type){
        case 'ADD_INPUTS': 
            return {...state,output:action.output}
        case 'ADD_PLAYER':
        	let players = state.players.concat(action.player);
            return {...state, players} 
        default: 
        	return {...state}

    }
}

export default playerReducers