export const battle = (battle) => ({ type: "BATTLE_START", battle })

export const endBattle = () => ({ type: "BATTLE_END" })

export const addPlayer = (player) => ({ type: "ADD_PLAYER", player })