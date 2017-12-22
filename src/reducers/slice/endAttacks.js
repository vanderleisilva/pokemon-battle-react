export default (state, action) => ({
    ...state, 
    battle: {
        ...state.battle,
        onAttack: false
    }
})