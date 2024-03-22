**Generics** in TypeScript are a way to create reusable components that can work with a variety of types rather than a single one. Generics allow you to write flexible and reusable functions, classes, interfaces, and methods that can handle different types of data while still maintaining type safety.

In this code, you have three functions `returnNumber`, `returnString`, and `returnBoolean` that return the same type as their input. These functions are limited because they can only handle one specific type of data.

```typescript
function returnNumber(val: number) : number {
  return val;
}
function returnString(val: string) : string {
  return val;
}
function returnBoolean(val: boolean) : boolean {
  return val;
}
```

To make these functions more flexible and reusable, you can use generics. The `returnType` function in your code is a generic function. It uses a type variable `<T>`, which acts as a placeholder for any type. This function can now handle any type of data, and TypeScript will ensure that the type of the input matches the type of the output.

```typescript
function returnType<T>(val: T) : T {
  return val;
}
```

You can call this function with any type of data, and TypeScript will infer the type for you. If you want to be explicit about the type, you can provide it in angle brackets when you call the function.

```typescript
console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));
```

This is a basic introduction to generics in TypeScript. Generics can also be used with classes, interfaces, and methods, allowing for even more flexible and reusable code.