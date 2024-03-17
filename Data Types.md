**1. TypeScript Data Types:**
TypeScript includes several data types including `number`, `string`, `boolean`, `null`, `undefined`, `object`, `array`, etc. These help ensure that variables and function parameters are being used correctly, catching errors at compile time.

**2. TypeScript Unknown:**
The `unknown` type in TypeScript is used for variables that we do not know what they will be when we are writing an application. It's a type-safe counterpart of `any`. You can't perform any operations on values of type `unknown` without first asserting or narrowing to a more specific type.

**3. TypeScript Type Aliases:**
Type aliases in TypeScript allow you to create a new name for a type. It can be used to give a type a new name for simplicity, readability, or to make more complex types easier to work with. Here's an example:

```typescript
type StringOrNumber = string | number;
let sample: StringOrNumber;
sample = 123;
sample = "123";
```

**4. TypeScript Type Aliases Extend:**
While TypeScript doesn’t have the exact ability to extend type aliases, you can create intersections of types to "extend" them. Here's an example:

```typescript
type Animal = {
  name: string
}

type Dog = Animal & {
  breed: string
}
```

**5. TypeScript Type Examples:**
Here are some examples of TypeScript types:

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
```

**6. TypeScript Union:**
A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members. Here's an example:

```typescript
type StringOrNumber = string | number;
let sample: StringOrNumber;
sample = 123;
sample = "123";
```

Remember, TypeScript's type system allows you to build complex and reusable types by combining existing ones. It's a powerful feature that helps to catch errors at compile time, making your code more robust and maintainable.