In TypeScript, **generics** can also be used with classes. This allows you to create classes that can work with a variety of types rather than a single one.

In this code, `User` is a generic class that can work with any type `T`. By default, `T` is `string` if no type is provided when creating an instance of the class.

```typescript
class User<T = string> {
  constructor(public value: T) {}
  show(msg: T) : void {
    console.log(`${msg} - ${this.value}`);
  }
}
```

The `User` class has a constructor that takes a value of type `T` and a method `show` that takes a message of type `T`. The `show` method logs a string that includes the message and the value.

You can create instances of the `User` class with different types. For example, `userOne` is an instance of `User` with type `string`, and `userTwo` is an instance of `User` with type `number | string` (which means the type can be either `number` or `string`).

```typescript
let userOne = new User<string>("Elzero");
console.log(userOne.value);
userOne.show("Message");

let userTwo = new User<number | string>(100);
console.log(userTwo.value);
userTwo.show("Message");
```

This is a powerful feature of generics in TypeScript. It allows you to write flexible and reusable code that can handle a variety of different types of data.