In TypeScript, the Rest Parameter syntax allows us to represent an indefinite number of arguments as an array. This can be particularly useful when writing a function that can accept any number of arguments. In the code, `...nums: number[]` is a rest parameter. Here's how it works:

```typescript
function addAll(...nums: number[]) : number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
    }
    return result;
}
  
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Outputs: 171.5
```

In this code, `addAll` is a function that takes any number of arguments (thanks to the rest parameter `...nums`), adds them up, and returns the result. Each argument must be a number, as specified by the type annotation `number[]`. If you try to pass an argument of a different type, TypeScript will throw an error.

Now, about floating point numbers: In TypeScript, there is no separate `float` type. Both integers and floating point numbers are represented by the `number` type. So, you can pass floating point numbers like `10.5` to the `addAll` function, and TypeScript will handle them correctly.

Finally, the `+true` in your code is a way to convert the boolean value `true` to a number. In JavaScript and TypeScript, `true` is converted to `1` and `false` is converted to `0` when you use the unary plus operator `+`. So, `+true` is `1`, and it's valid to pass it to the `addAll` function because `1` is a number. This is why the output of `console.log(addAll(10, 20, 30, 100, 10.5, +true));` is `171.5`.