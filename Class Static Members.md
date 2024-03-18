In TypeScript, classes can have static members. Static members belong to the class itself rather than an instance of the class. This means you can access them without creating an instance of the class.

Let's take a look at an example:

```typescript
class User {
  private static created: number = 0;
  static getCount() : void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");

User.getCount(); // Outputs: 3 Objects Created
```

In this example, we have a `User` class with a private static `created` property and a public static `getCount` method. The `created` property keeps track of how many `User` objects have been created. Each time a new `User` object is created, the `created` property is incremented.

The `getCount` method logs the number of `User` objects created. Since `getCount` is a static method, it can be called directly on the `User` class.

This is a basic overview of how class static members work in TypeScript. They provide a way to share data and methods across all instances of a class, making the code more efficient and easier to manage.

Note: It's important to avoid using reserved words like "name", "length", and "call" as static member names, as they can conflict with built-in properties and methods.