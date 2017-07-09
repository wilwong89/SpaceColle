/* eslint-disable */

export default {
    namespaced: true,
    state: {
        shipID : "dd_0001", 
        shipName: "USS Willie D Porter",
        shipClass: "destroyer", //destroyer, cruiser, battleship, carrier
        experience: 0,
        buffs: {},
        debuffs: {},
        attributes: ["Unlucky"], //Should be simple text strings. 
        currentStats: { //These should change according to the battle
            attack: "int",
            speed: "int",
            health: "int",
            shield: "int",
        },
        baseStats: { //These shouldn't be changed in battle
            attack: 25,
            speed: 100,
            health: 25,
            shield: 25
        },
        weapons: { //equivalent to FGO attack cards
            maxSlots: 3, 
            equipped: ["Base torpedoes"] //array of weapon objects, defined later
        },
        // FGO attack card <--> SpaceColle equivalent
        // Quick <--> Missiles
        // Arts <--> Lasers
        // Buster <--> Railgun
        equipment: { //equivalent to FGO skills for now
            maxSlots: 3, //max 3 for now
            equipped: ["Bad aim"] //array of equipment objects, defined later
        },
        hangar: { // Will not be used for now. Slated for change after operational with FGO systems
            maxSlots: "int",
            equipped: [] //array of arsenal objects, like drones, fighters, missiles, defined later
        },
        fuel: {
            base: 50,
            current: 50
        },
        ammo: {
            base: 25,
            current: 25
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
