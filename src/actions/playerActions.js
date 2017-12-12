export const battle = (battle) => {
    return {
        type: "BATTLE_START",
        battle 
    }
}

export const addPlayer = (player) => {
    return {
        type: "ADD_PLAYER",
        player
    }
}