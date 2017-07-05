Ship = {
    shipID : "string", //
    shipName: "string",
    shipType: "string", //destroyer, cruiser, battleship, carrier
    weapons: {
        maxSlots: "int",
        equipped: [] //array of weapon objects, defined later
    },
    equipment: {
        maxSlots: "int",
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
    hangar: {
        maxSlots: "int",
        equipped: [] //array of arsenal objects, like drones, fighters, missiles, defined later
    },
    fuel: {
        base: "int",
        current: "int"
    }
}