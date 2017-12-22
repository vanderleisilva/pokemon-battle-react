export default (state, action) => ({
    ...state, 
    battle: {
        ...state.battle,
        against: {
           ...state.battle.against,
           actions: [action.hit, ...state.battle.against.actions]
        },
        player: {
            ...state.battle.player,
            currentHealth: state.battle.player.currentHealth - action.hit.damage
        }
    }
})