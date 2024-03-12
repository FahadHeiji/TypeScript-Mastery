**Anonymous Functions** are functions that are declared without any named identifier to refer to them. As such, an anonymous function is usually not accessible after its initial creation. In the code, `add` is an anonymous function that takes two parameters of type `number` and returns a `number`. Here's how it works:

```typescript
const add = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(add(10, 20)); // Outputs: 30
```

In this code, `add` is a constant that holds an anonymous function. You can call `add` with two numbers, and it will return their sum.

**Arrow Functions** provide a compact syntax to create anonymous functions in TypeScript. The arrow function `addWithArrow` in the code is equivalent to the anonymous function `add`. Here's how it works:

```typescript
const addWithArrow = (num1: number, num2: number): number => num1 + num2;

console.log(addWithArrow(10, 20)); // Outputs: 30
```

In this code, `addWithArrow` is a constant that holds an arrow function. You can call `addWithArrow` with two numbers, and it will return their sum. The `=>` symbol is used to define an arrow function.

In summary, both anonymous functions and arrow functions are ways to define functions in TypeScript. Arrow functions provide a more compact syntax and have some differences in how they handle `this`, but they are otherwise very similar to regular anonymous functions. Both can be used to create functions that can be passed around as values, making them very useful in functional programming patterns.