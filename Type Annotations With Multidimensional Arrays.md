In TypeScript, you can use type annotations with arrays to specify the type of elements that an array can hold. This is done by appending `[]` to the type. For example, `let arrayOne: number[] = [1, 2, 3, 4, 5];` declares a variable `arrayOne` that is an array of numbers.

You can also specify that an array can hold multiple types of elements by using the `|` operator, which denotes a union type. A union type can hold a value of any of the types in the union. For example, `let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];` declares a variable `arrayThree` that is an array of strings and numbers.

Multidimensional arrays, or arrays of arrays, can also be typed. For example, `let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];` declares a variable `arrayFour` that is an array of strings, numbers, boolean values, and arrays of strings.

Here's how you can use these concepts in the code:

```typescript
let arrayOne: number[] = [1, 2, 3, 4, 5]; // An array of numbers

let arrayTwo: string[] = ["A", "B", "C"]; // An array of strings

let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"]; // An array of strings and numbers

let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false]; // An array of strings, numbers, boolean values, and arrays of strings
```

In this code, `arrayOne` is an array of numbers, `arrayTwo` is an array of strings, `arrayThree` is an array of strings and numbers, and `arrayFour` is an array of strings, numbers, boolean values, and arrays of strings. If you try to assign a value of a different type to these arrays, TypeScript will throw an error. This is the power of type annotations: they help catch errors early in the development process.