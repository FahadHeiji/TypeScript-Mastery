**Void**

In TypeScript, `void` is a type that represents the absence of having any type at all. It's commonly used as the return type of functions that do not return a value.

Here's an example from the code:

```typescript
function logging(msg: string) : void {
  console.log(msg);
  return;
}
```

In this code, `logging` is a function that takes a string and returns `void`. The function logs the message and then returns. Because the return type is `void`, you can't use the return value of the function:

```typescript
console.log(logging("Iam A Message")); // Outputs: undefined
```

In this code, `console.log(logging("Iam A Message"))` logs `undefined` because `logging` returns `void`.

Please note that in JavaScript, a function without a return statement returns `undefined`, but `undefined` is not the same as `void`. In TypeScript, `undefined` is a type that has one value: `undefined`, while `void` is a type that has no values.

**Never**

The `never` type in TypeScript represents a type of values that never occur. It's used for functions that never return a value because they always throw an error or have an infinite loop.

Here are examples from your code:

```typescript
const fail = (msg: string) => {
  throw new Error(msg);
  // return 10;
}

function alwaysLog(name: string) : never {
  while(true) {
    console.log(name);
  }
}
```

In this code, `fail` is a function that takes a string and throws an error. It never returns a value, so its return type is `never`. Similarly, `alwaysLog` is a function that has an infinite loop and never finishes running, so its return type is also `never`.

In summary, `void` and `never` are special types in TypeScript that represent the absence of a value and a value that never occurs, respectively. They are used to enforce type safety in functions that do not return a value or never finish running.