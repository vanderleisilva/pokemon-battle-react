export const initialBattle = { 
	player: { 
		actions: [] 
	}, 
	against: { 
		actions: [] 
	}
};

const initialState = { 
	players: [], 
	battle: initialBattle,
	api: {
		url: 'https://vanderleisilva.github.io/pokemon-battle/backend-api.json',
		selected: undefined,
		engines: []
	}
}

export default initialState;