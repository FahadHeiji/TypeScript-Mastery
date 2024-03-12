In TypeScript, you can use type annotations with functions to specify the types of the function's parameters and return value. This is done by appending `: type` after the parameter or function name. For example, in the function `function showDetails(name: string, age: number, salary: number) : string`, `name`, `age`, and `salary` are parameters with types `string`, `number`, and `number` respectively, and the function is expected to return a `string`.

Here's how you can use these concepts in the code:

```typescript
let showMsg = true;

function showDetails(name: string, age: number, salary: number) : string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Osama", 40, 5000));
```

In this code, `showDetails` is a function that takes three parameters: `name` of type `string`, `age` of type `number`, and `salary` of type `number`. It returns a `string`. If you try to pass arguments of a different type or return a value of a different type, TypeScript will throw an error.

Now, let's discuss the compiler options:

- `noImplicitAny`: This option prevents the use of variables that have not been explicitly typed and would otherwise be implicitly `any`. This helps catch potential errors where the type of a variable might be unclear.

- `noImplicitReturns`: This option checks all code paths in a function to ensure they return a value. If there's a path that does not return a value, TypeScript will throw an error.

- `noUnusedLocals`: This option reports errors on unused local variables. If you declare a variable but never use it, TypeScript will throw an error.

- `noUnusedParameters`: This option reports errors on unused parameters in functions. If you declare a parameter for a function but never use it in the function body, TypeScript will throw an error.

These options help enforce good coding practices and catch potential errors early in the development process. They can be set in the `tsconfig.json` file.