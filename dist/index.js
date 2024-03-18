"use strict";
class User {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        User.created++;
    }
}
User.created = 0;
let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");
User.getCount();
//# sourceMappingURL=index.js.map