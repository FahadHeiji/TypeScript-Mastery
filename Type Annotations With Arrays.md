In TypeScript, you can use type annotations with arrays to specify the type of elements that an array can hold. This is done by appending `[]` to the type. For example, `let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];` declares a variable `myFriends` that is an array of strings.

You can also use the `Array<type>` syntax to declare an array, where `type` is the type of elements in the array. For example, `let myFriends: Array<string> = ["Osama", "Ahmed", "Sayed"];` is equivalent to the previous example.

In the code, We've declared a variable `all` that can hold a value of type `string`, `number`, or `boolean`. This is done using the `|` operator, which denotes a union type. A union type can hold a value of any of the types in the union. For example, `let all: string | number | boolean = "Osama";` declares a variable `all` that can hold a string, number, or boolean value.

Here's how you can use these concepts in the code:

```typescript
let all: string | number | boolean = "Osama";

all = "A"; // valid because "A" is a string
all = 100; // valid because 100 is a number
all = true; // valid because true is a boolean

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3)); // valid because repeat is a method on string
}
```

In this code, `myFriends` is an array of strings, so you can call any string method (like `repeat`) on its elements. If you try to assign a value of a different type to `myFriends`, TypeScript will throw an error. Similarly, if you try to call a method that doesn't exist on `string` on an element of `myFriends`, TypeScript will also throw an error. This is the power of type annotations: they help catch errors early in the development process.