/* eslint-disable */

export default {
    state: {
        shipID : "bb_0001", 
        shipName: "USS Titanic",
        shipClass: "battleship", //destroyer, cruiser, battleship, carrier
        experience: 0,
        buffs: {},
        debuffs: {},
        attributes: ["Unsinkable"], //Should be simple text strings. 
        currentStats: { //These should change according to the battle
            attack: "int",
            speed: "int",
            health: "int",
            shield: "int",
        },
        baseStats: { //These shouldn't be changed in battle
            attack: 100,
            speed: 50,
            health: 100,
            shield: 100
        },
        weapons: { //equivalent to FGO attack cards
            maxSlots: 3, 
            equipped: ["Iceberg Railgun"] //array of weapon objects, defined later
        },
        // FGO attack card <--> SpaceColle equivalent
        // Quick <--> Missiles
        // Arts <--> Lasers
        // Buster <--> Railgun
        equipment: { //equivalent to FGO skills for now
            maxSlots: 3, //max 3 for now
            equipped: ["Double hull","Not lifeboats"] //array of equipment objects, defined later
        },
        hangar: { // Will not be used for now. Slated for change after operational with FGO systems
            maxSlots: "int",
            equipped: [] //array of arsenal objects, like drones, fighters, missiles, defined later
        },
        fuel: {
            base: 100,
            current: 100
        },
        ammo: {
            base: 75,
            current: 75
        }
    },
    mutations: {},
    getters: {
        returnStat: (state, getters) => (stat) => {
            return state[stat]
        },
        returnTest: (state) => {
            return "TEST"
        }
        
    }
}
