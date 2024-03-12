In TypeScript, function parameters can be made optional by appending a `?` to the parameter name. This means that you can call the function without providing a value for that parameter, and TypeScript will not throw an error. If an optional parameter is not provided a value when the function is called, its value inside the function is `undefined`. For example:

```typescript
function showData(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData("Osama", 40, "Egypt")); // Outputs: "Osama - 40 - Egypt"
console.log(showData()); // Outputs: "undefined - undefined - undefined"
```

In this code, `name`, `age`, and `country` are optional parameters. You can call `showData` with any number of arguments from 0 to 3.

Default parameters in TypeScript work similarly to default parameters in JavaScript. You can provide a default value for a parameter by assigning it a value in the function signature. If the function is called without a value for that parameter, the default value is used instead. For example:

```javascript
function showData(name = "Un", age, country) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData(undefined, 40, "Egypt")); // Outputs: "Un - 40 - Egypt"
```

In this code, `name` has a default value of `"Un"`. If you call `showData` without providing a value for `name` (or if you pass `undefined`), `"Un"` is used as the value of `name`.

In summary, optional and default parameters in TypeScript provide flexibility in how you can call functions. They allow you to write functions that can handle a variable number of arguments and provide sensible defaults for missing values. This can make your code more robust and easier to use.