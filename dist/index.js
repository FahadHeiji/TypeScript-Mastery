"use strict";
console.groupCollapsed();
let user = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    },
};
user.id = 200;
user.id = "200";
user.state = false;
console.groupEnd();
console.groupCollapsed();
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    },
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
console.groupEnd();
console.groupCollapsed();
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton",
};
console.groupEnd();
console.groupCollapsed();
class Player {
    constructor(playerName, type, level, isVIP) {
        this.playerName = playerName;
        this.type = type;
        this.level = level;
        this.isVIP = isVIP;
        this.details = () => {
            return `${this.isVIP ? "VIP " : ""}${this.playerName}, Type Is ${this.type} Level ${this.level}`;
        };
    }
}
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details());
console.log(player2.details());
console.log(player3.details());
console.log(player4.details());
console.groupEnd();
console.groupCollapsed();
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let testerr = new Shorten(100, "Elzero", "Developer");
console.log(testerr.id);
console.log(testerr.username);
console.groupEnd();
console.groupCollapsed();
class Show {
    set title(value) {
        this._title = value;
    }
    get title() {
        return this._title;
    }
    constructor(_title) {
        this._title = _title;
    }
}
let tester = new Show("Elzero");
console.log(tester.title);
tester.title = "Osama";
console.log(tester.title);
console.groupEnd();
console.groupCollapsed();
class Playerr {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log("Logged In");
    }
    logOut(msg) {
        console.log(`Logged Out, ${msg}`);
    }
}
let player11 = new Playerr(100, "Elzero", 95);
console.log(player11.id);
console.log(player11.title);
console.log(player11.level);
player11.logIn();
player11.logOut("Good Bye");
console.groupEnd();
//# sourceMappingURL=index.js.map