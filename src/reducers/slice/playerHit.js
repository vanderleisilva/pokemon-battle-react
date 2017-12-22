export default (state, action) => ( {
    ...state, 
    battle: {
        ...state.battle,
        player: {
           ...state.battle.player,
           actions: [action.hit, ...state.battle.player.actions]                       
        },
        against: {
            ...state.battle.against,
            currentHealth: state.battle.against.currentHealth - action.hit.damage
        }
    }
})