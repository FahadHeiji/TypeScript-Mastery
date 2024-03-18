In TypeScript, an interface can be extended to inherit the properties of another interface. This is useful when you want to create a new interface that includes all the properties of an existing interface, plus some additional ones.

Let's take a look at an example:

```typescript
interface User {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User, Moderator {
  protect?: boolean;
}
```

In this example, we have a `User` interface and a `Moderator` interface. The `Admin` interface extends both the `User` and `Moderator` interfaces, meaning it inherits all their properties. In addition, the `Admin` interface also has an optional `protect` property.

We can then create an object that adheres to this interface:

```typescript
let user: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true
}
```

In this `user` object, we have defined the properties as per the `Admin` interface. The `id`, `username`, and `country` properties are inherited from the `User` interface, the `role` property is inherited from the `Moderator` interface, and the `protect` property is specific to the `Admin` interface.

We can then use these properties:

```typescript
console.log(user.id); // Outputs: 100
```

This is a basic overview of how interface extension works in TypeScript. It provides a way to create new interfaces that include the properties of existing interfaces, making the code more modular and reusable.