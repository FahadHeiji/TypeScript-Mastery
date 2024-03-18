"use strict";
class User {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`Updated`);
    }
}
let userOne = new User("Elzero", true, "Open Sans");
console.log(userOne.username);
console.log(userOne.font);
userOne.save();
userOne.update();
//# sourceMappingURL=index.js.map