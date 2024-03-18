In TypeScript, classes are a fundamental building block of the language. They provide a way to define custom types and create objects that adhere to these types. Type annotations can be used in classes to specify the types of properties and methods.

Let's take a look at an example:

```typescript
class User {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User("Elzero", 6000);

console.log(userOne.u); // Outputs: Elzero
console.log(userOne.s); // Outputs: 6000
console.log(userOne.msg()); // Outputs: Hello Elzero Your Salary Is 6000
console.log(userOne.sayMsg()); // Outputs: Hello Elzero Your Salary Is 6000
```

In this example, we have a `User` class with properties `u`, `s`, and `msg`. The `u` property is of type `string`, the `s` property is of type `number`, and the `msg` property is a function that returns a `string`.

The `constructor` method is a special method for creating and initializing an object created with a class. In this case, it takes two parameters, `username` and `salary`, and assigns them to the `u` and `s` properties respectively. It also defines the `msg` method to return a greeting with the `username` and `salary`.

The `sayMsg` method is another method that returns the same greeting.

We then create a `userOne` object using the `new` keyword and the `User` class. We can then use the properties and methods of this object.

This is a basic overview of how class type annotations work in TypeScript. They provide a way to ensure that properties and methods of a class have the correct types, making the code more predictable and easier to work with.