/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/

class Player {
  constructor(public name: string) {}
  attack() : void {
    console.log("Attacking Now");
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Spear");
    this.spears -= 1;
  }
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Axe");
    this.axeDurability -= 1;
  }
}

let barOne = new Barbarian("Elzero", 100);

console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);