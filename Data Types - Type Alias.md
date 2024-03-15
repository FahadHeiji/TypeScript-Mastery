**Data Types in TypeScript**

TypeScript includes several data types that are similar to those in JavaScript, including `number`, `string`, `boolean`, `null`, `undefined`, `object`, and `symbol`. In addition to these, TypeScript introduces some new types like `any`, `unknown`, `never`, `void`, `enum`, `tuple`, and `array`.

**Type Alias in TypeScript**

A Type Alias in TypeScript is a way to provide a new name for a type. It can be used to give a type a more descriptive name, or to simplify complex type annotations. Once defined, a type alias can be used anywhere a type annotation can be used.

Here's how you can define a type alias:

```typescript
type st = string;
let theName: st = "Elzero";
theName = "Osama";
```

In this code, `st` is a type alias for the `string` type. You can now use `st` as a type annotation. The variable `theName` is declared with the type `st`, so it can hold string values.

You can also create a type alias for a union type:

```typescript
type standnum = string | number;
let all: standnum = 10;
all = 100;
all = "Osama";
```

In this code, `standnum` is a type alias for the union type `string | number`. The variable `all` is declared with the type `standnum`, so it can hold either string or number values.

In summary, type aliases in TypeScript are a powerful feature that can make your code more readable and maintainable by providing descriptive names for complex types. They can be used with any type, including primitive types, union types, intersection types, object types, function types, and more.
