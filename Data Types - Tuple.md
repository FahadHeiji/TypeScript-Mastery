Sure, let's discuss Tuples in TypeScript using your provided information.

**Tuples in TypeScript**

A Tuple in TypeScript is a type that allows you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you might want to represent a value as a pair of a string and a number:

```typescript
// Declare a tuple type
let x: [string, number];
```

In the code, We've defined a tuple `article` that consists of a `number`, a `string`, and a `boolean`.

```typescript
let article: readonly [number, string, boolean] = [11, "Title One", true];
```

The `readonly` modifier means that the elements of the tuple cannot be changed once they are assigned. This is why the line `article.push(100);` is commented out - it would result in a TypeScript error.

You can assign a new tuple to the `article` variable, but you can't change the individual elements of the tuple:

```typescript
article = [12, "Title Two", false]; // This is valid
```

You can also use destructuring to assign the elements of the tuple to individual variables:

```typescript
const [id, title, published] = article;
console.log(id); // Outputs: 12
console.log(title); // Outputs: "Title Two"
console.log(published); // Outputs: false
```

In this code, `id`, `title`, and `published` are constants that hold the values of the elements of the `article` tuple.

In summary, tuples in TypeScript are a way to represent a fixed number of known types in an array. They can be useful when you need to group together values of different types and know exactly how many values you have.