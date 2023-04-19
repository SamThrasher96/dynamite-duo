const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ]
    , villains: [
        {
            id: 1,
            name: "Thanos",
            power: "infinity stones"
        },
        {
            id: 2,
            name: "Juggernaut",
            power: "Super strength"
        },
        {
            id: 3,
            name: "Magneto",
            power: "Master of magnetism"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
