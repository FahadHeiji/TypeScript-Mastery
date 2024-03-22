"use strict";
console.groupCollapsed();
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class RPG extends Game {
    constructor(title, price, rate) {
        super(title, price);
        this.price = price;
        this.rate = rate;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
class Action extends Game {
    constructor(title, price, rate, company) {
        super(title, price);
        this.price = price;
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title);
console.log(gameOne.price);
console.log(gameOne.rate);
console.log(gameOne.getDiscount());
console.log(gameOne.getLocation());
console.log(gameTwo.title);
console.log(gameTwo.price);
console.log(gameTwo.rate);
console.log(gameTwo.company);
console.log(gameTwo.getDiscount());
console.log(gameTwo.getLocation());
console.groupEnd();
console.groupCollapsed();
function showTypes(para1, para2, para3) {
    return `${para1 == undefined ? "Nothing" : para1}-${para2 == undefined ? "Nothing" : para2}-${para3 == undefined ? "Nothing" : para3}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
console.groupEnd();
console.groupCollapsed();
class Game1 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(dis) {
        console.log(`The Discount Is ${dis}`);
    }
}
let gameOne1 = new Game1("Ys", 100);
let gameTwo1 = new Game1(2064, 100);
console.log(gameOne1.title);
console.log(gameOne1.price);
gameOne1.getDiscount("50");
console.log(gameTwo1.title);
console.log(gameTwo1.price);
gameTwo1.getDiscount(80);
console.groupEnd();
//# sourceMappingURL=index.js.map