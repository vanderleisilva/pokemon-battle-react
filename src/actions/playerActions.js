export const battle = (battle) => ({ type: "BATTLE_START", battle })

export const endBattle = () => ({ type: "BATTLE_END" })

export const addPlayer = (player) => ({ type: "ADD_PLAYER", player })

export const playerHit = (hit) => ({ type: "PLAYER_HIT", hit })

export const cpuHit = (hit) => ({ type: "CPU_HIT", hit })

export const startAttacks = () => ({ type: "START_ATTACKS" })

export const endAttacks = () => ({ type: "END_ATTACKS" })

export const loadApi = (api) => ({ type: "LOAD_API", api })

export const changeApi = (api) => ({ type: "CHANGE_API", api })
