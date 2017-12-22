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
	battle: initialBattle
}

export default initialState;