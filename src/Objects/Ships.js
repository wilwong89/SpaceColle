Ship = {
    shipID : "string", //
    shipName: "string",
    shipType: "string", //destroyer, cruiser, battleship, carrier
    experience: "int",
    currentStats: {
        attack: "int",
        speed: "int",
        health: "int",
        shield: "int",
    },
    baseStats: {
        attack: "int",
        speed: "int",
        health: "int",
        shield: "int",
    },
    weapons: { //equivalent to FGO attack cards
        maxSlots: "int", //max 5 for now
        equipped: [] //array of weapon objects, defined later
    },
    // FGO attack card <--> SpaceColle equivalent
    // Quick <--> Missiles
    // Arts <--> Lasers
    // Buster <--> Railgun
    equipment: { //equivalent to FGO skills for now
        maxSlots: "int", //max 3 for now
        equipped: [] //array of equipment objects, defined later
    },
    health: {
        base: "int",
        current: "int"
    },
    shields: {
        base: "int",
        current: "int"
    },
    hangar: { // Will not be used for now. Slated for change after operational with FGO systems
        maxSlots: "int",
        equipped: [] //array of arsenal objects, like drones, fighters, missiles, defined later
    },
    fuel: {
        base: "int",
        current: "int"
    }
}