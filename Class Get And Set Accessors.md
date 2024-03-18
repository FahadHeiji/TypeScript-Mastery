In TypeScript, classes can have accessors, also known as getters and setters. These are special methods that allow you to control how a property of an object is accessed and modified.

Let's take a look at an example:

```typescript
class User {
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  msg: () => string;
  constructor(private _username: string, public salary: number, public readonly address: string) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User("Elzero", 6000, "Cairo");

console.log(userOne.username); // Outputs: Elzero
userOne.username = "Ahmed";
console.log(userOne.username); // Outputs: Ahmed
console.log(userOne.salary); // Outputs: 6000
console.log(userOne.msg()); // Outputs: Hello Ahmed Your Salary Is 6000
console.log(userOne.sayMsg()); // Outputs: Hello Ahmed Your Salary Is 6000
```

In this example, we have a `User` class with a `username` getter and setter. The `username` getter returns the `_username` property, and the `username` setter updates the `_username` property.

The `msg` method and `sayMsg` method both return a greeting with the `username` and `salary`.

We then create a `userOne` object using the `new` keyword and the `User` class. We can then use the `username` getter to access the `username` property, the `username` setter to update the `username` property, and the `msg` and `sayMsg` methods to get a greeting.

Class accessors provide a way to control how a property of a class is accessed and modified, making the code more secure and easier to manage.