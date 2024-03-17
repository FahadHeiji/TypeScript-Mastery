In TypeScript, **Union Types** and **Intersection Types** are powerful ways to combine and work with multiple types.

**Union Types** are created using the `|` symbol. A union type is a type formed from two or more other types, representing values that may be any one of those types. Here's an example from the code:

```typescript
let all: number | string = 100;
```
In this line, `all` can be either a `number` or a `string`.

**Intersection Types** are created using the `&` symbol. An intersection type combines multiple types into one. This means that an object of this type will have all the features of all the component types. Here's an example from the code:

```typescript
type A = {
  one: string,
  two: number,
  three: boolean
}

type B = A & {
  four: number
}
```
In this snippet, `B` is an intersection type that includes all properties of `A` and an additional property `four` of type `number`.

In the function `getActions`, you're using an intersection type `mix` which is a combination of types `A` and `C`. This means that the parameter `btns` in `getActions` function should have all the properties defined in both `A` and `C`.

Remember, if a union type is an "OR" (this type or that type), then an intersection type is an "AND" (this type and that type). They are powerful tools in TypeScript that allow for more flexibility and precision in your type definitions.