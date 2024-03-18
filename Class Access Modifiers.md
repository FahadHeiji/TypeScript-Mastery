In TypeScript, classes can have access modifiers that control the visibility of their members (properties and methods). There are three types of access modifiers:

1. **Public**: All members of a class in TypeScript are public by default. Public members can be accessed anywhere without any restrictions.

2. **Private**: Private members are visible only to that class and are not accessible outside the class.

3. **Protected**: Protected members are similar to private members, but they can also be accessed within deriving classes.

Let's take a look at an example:

```typescript
class User {
  msg: () => string;
  constructor(private username: string, protected salary: number, public readonly address: string) {
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let userOne = new User("Elzero", 6000, "Cairo");

console.log(userOne.msg()); // Outputs: Hello Elzero Your Salary Is 6000
console.log(userOne.sayMsg()); // Outputs: Hello Elzero Your Salary Is 6000
```

In this example, we have a `User` class with a `msg` method and a constructor. The constructor has three parameters: `username`, `salary`, and `address`. The `username` parameter is private, which means it can only be accessed within the `User` class. The `salary` parameter is protected, which means it can be accessed within the `User` class and any class that extends `User`. The `address` parameter is public and read-only, which means it can be accessed anywhere and cannot be modified after it is initialized.

The `msg` method and `sayMsg` method both return a greeting with the `username` and `salary`.

We then create a `userOne` object using the `new` keyword and the `User` class. We can then use the `msg` and `sayMsg` methods of this object.
