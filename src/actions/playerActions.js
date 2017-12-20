export const battle = (battle) => ({ type: "BATTLE_START", battle })

export const endBattle = () => ({ type: "BATTLE_END" })

export const addPlayer = (player) => ({ type: "ADD_PLAYER", player })

export const playerHit = (hit) => ({ type: "PLAYER_HIT", hit })

export const cpuHit = (hit) => ({ type: "CPU_HIT", hit })