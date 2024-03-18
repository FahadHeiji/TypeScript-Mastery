/*
  Interface
  - Interface Method And Parameters
*/

interface User {
  id: number;
  username: string;
  country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}

let user: User = {
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
}

console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));