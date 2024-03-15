"use strict";
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var Level;
(function (Level) {
    Level[Level["Kids"] = 15] = "Kids";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}
//# sourceMappingURL=index.js.map