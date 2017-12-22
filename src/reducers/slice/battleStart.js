export default (state, action) => ({
    ...state, 
    battle: {
        ...action.battle,        
        player: {
            ...action.battle.player,
            currentHealth: action.battle.player.health,
            actions: []
        },
        against: {
           ...action.battle.against,
           currentHealth: action.battle.against.health,
           actions: []
        },
        started: true
    }
})