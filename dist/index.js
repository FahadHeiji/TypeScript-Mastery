"use strict";
class User {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let userOne = new User("Elzero", 6000, "Cairo");
console.log(userOne.msg());
console.log(userOne.sayMsg());
//# sourceMappingURL=index.js.map