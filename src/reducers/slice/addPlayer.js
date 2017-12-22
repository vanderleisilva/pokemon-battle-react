export default (state, action) => ( {
    ...state, 
    players: [...state.players, action.player]
})
