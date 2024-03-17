"use strict";
console.groupCollapsed();
let myData;
myData = 1000;
console.log(myData);
myData = +true;
console.log(myData);
console.groupEnd();
console.groupCollapsed();
let myInfo;
myInfo = 1000;
console.log(myInfo);
myInfo = true;
console.log(myInfo);
console.groupEnd();
console.groupCollapsed();
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
console.groupEnd();
console.groupCollapsed();
function yesOrNo(val) {
    if (+val > 10) {
        return "Yes";
    }
    else {
        return "No";
    }
}
console.log(yesOrNo(30));
console.log(yesOrNo(8));
console.groupEnd();
console.groupCollapsed();
function isHeOld(age) {
    if (age > 40) {
        return "Yes";
    }
    else {
        return "No";
    }
}
console.log(isHeOld(45));
console.log(isHeOld(30));
console.groupEnd();
console.groupCollapsed();
let post;
post = [100, "Title", true];
const [id, title, state] = post;
console.log(id);
console.log(title);
console.log(state);
console.groupEnd();
console.groupCollapsed();
const insane = (num) => (num > 0) ? Game.Hard - num : Game.Hard - Math.floor(Math.random() * (5 - 1 + 1)) + 1;
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = insane(10)] = "Insane";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
console.groupEnd();
console.groupCollapsed();
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    }
};
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
console.groupEnd();
//# sourceMappingURL=index.js.map