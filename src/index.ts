/*
    Typescript Assignments Lessons From 32-to-38

    Before You Start Search For:

      - Typescript Generics Interface
      - Typescript Generics Types
      - Typescript Optional Generics
      - Typescript Generics Use Cases
      - Typescript Generics And Classes
      - Typescript Method Override
      
        */

/*
        اسْتَعِنْ باللَّهِ وَلَا تَعْجِزْ
*/

// Q-01:
console.groupCollapsed();

// Do Not Edit
type numandstring = number | string;

abstract class Game {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation() : string;
  abstract getDiscount() : string;
}

// Start Edit And Fix
class RPG extends Game {
  constructor(title: string, public price: numandstring, public rate: number) {
    super(title,price);
  }
  getLocation(): string {
    return "Location";
  }
  getDiscount():string {
    return "Discount";
  }
}

class Action extends Game {
  constructor(title: string, public price: numandstring, public rate: number,public company: string) {
    super(title,price);
  }
   getLocation() :string {
    return "Location";
  }
  getDiscount():string {
    return "Discount";
  }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
console.groupEnd();

// Q-02:
console.groupCollapsed();

// Write Function Code Here
function showTypes<T = void, S = void ,B =void >(para1?: T ,para2?: S,para3? :B): string{
  
  return `${para1== undefined ? "Nothing" : para1}-${para2== undefined ? "Nothing" : para2}-${para3== undefined ? "Nothing" : para3}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

console.groupEnd();

// Q-03:
console.groupCollapsed();

// Write Class Code Here
class Game1<T>{
constructor(public title: T, public price: T){}
  getDiscount(dis: T) : void{
    console.log( `The Discount Is ${dis}`);
  }
}
// Do Not Edit Here
let gameOne1 = new Game1<string|number>("Ys", 100);
let gameTwo1 = new Game1<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne1.title); // "Ys"
console.log(gameOne1.price); // 100
gameOne1.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo1.title); // 2064
console.log(gameTwo1.price); // 100
gameTwo1.getDiscount(80); // "The Discount Is 80"

console.groupEnd();
