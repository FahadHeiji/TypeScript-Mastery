"use strict";
let user = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));
//# sourceMappingURL=index.js.map