In TypeScript, an **interface** is a way to define a contract on a function with respect to the arguments and their type. Along with functions, an interface can also be used with objects and classes.

Here, an interface named `User` is declared:

```typescript
interface User {
  id?: number;
  readonly username: string;
  country: string;
}
```

This `User` interface serves like a type that describes the shape of an object. It has three properties: `id`, `username`, and `country`. The `id` property is optional (as denoted by the `?`), meaning it may or may not exist in objects of type `User`. The `username` property is read-only (as denoted by the `readonly` keyword), meaning its value cannot be changed once it is set. The `country` property is a regular, mutable string property.

Next, an object `user` of type `User` is created:

```typescript
let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
};
```

The `country` property of the `user` object is then updated:

```typescript
user.country = "Syria";
```

The `console.log(user);` statement will print the updated `user` object to the console.

Finally, a function `getData` is declared which takes an object of type `User` as a parameter and logs the properties of the object:

```typescript
function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}
```

The `getData` function is then called with a new `User` object:

```typescript
getData({ id: 200, username: "Osama", country: "KSA" });
```

This will log the properties of the new `User` object to the console.
