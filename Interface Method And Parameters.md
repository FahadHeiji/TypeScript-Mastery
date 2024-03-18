Sure, here's an informative document on the topic of **Interface Method And Parameters in TypeScript**:

In TypeScript, an interface is a way to define a contract on a function with respect to the arguments and their type. Along with functions, an interface can also be used with a Class as well to define custom types.

Let's take a look at an example:

```typescript
interface User {
  id: number;
  username: string;
  country: string;
  sayHello() : string;
  sayWelcome: () => string;
  getDouble(num: number) : number;
}
```

In this `User` interface, we have defined some properties and methods:
- `id`, `username`, and `country` are properties of type `number`, `string`, and `string` respectively.
- `sayHello` is a method that returns a `string`.
- `sayWelcome` is a method that also returns a `string`.
- `getDouble` is a method that takes a `number` as a parameter and returns a `number`.

We can then create an object that adheres to this interface:

```typescript
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
```

In this `user` object, we have defined the properties and methods as per the `User` interface. The `sayHello` method returns a greeting with the `username`, the `sayWelcome` method returns a welcome message with the `username`, and the `getDouble` method returns the double of the input number.

We can then use these methods and properties:

```typescript
console.log(user.id); // Outputs: 100
console.log(user.sayHello()); // Outputs: Hello Elzero
console.log(user.sayWelcome()); // Outputs: Welcome Elzero
console.log(user.getDouble(100)); // Outputs: 200
```

This is a basic overview of how interfaces, methods, and parameters work in TypeScript. They provide a way to ensure objects have certain properties and methods, making the code more predictable and easier to work with.