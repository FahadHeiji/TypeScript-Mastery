**Literal Types** in TypeScript are a way to further constrain the values that a variable can hold. A literal type is a type that represents exactly one value. For example, the type `1` is a literal type that represents exactly the value `1`.

In the code, you've defined a type alias `nums` that is a union of the literal types `0`, `1`, and `-1`.

```typescript
type nums = 0 | 1 | -1;
```

This means that a variable of type `nums` can hold exactly one of these three values: `0`, `1`, or `-1`.

You've then defined a function `compare` that takes two numbers and returns a `nums`. The function compares the two numbers and returns `0` if they are equal, `1` if the first number is greater, and `-1` if the second number is greater.

```typescript
function compare(num1: number, num2: number) : nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}
```

Finally, you've declared a variable `myNumber` of type `nums` and assigned it the value `1`.

```typescript
let myNumber: nums = 1;
```

In summary, literal types in TypeScript are a powerful feature that allows you to constrain the possible values of a variable to a finite set of literal values. They can be used with type aliases and union types to create complex, constrained types.