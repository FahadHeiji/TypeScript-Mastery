"use strict";
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking Now");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        console.log("Attacking With Axe");
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian("Elzero", 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
//# sourceMappingURL=index.js.map