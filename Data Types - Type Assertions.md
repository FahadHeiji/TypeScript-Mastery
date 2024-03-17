In TypeScript, **Type Assertions** are a way to tell the compiler "trust me, I know what I'm doing." It's a way of specifying the specific type of an object.

Here's a breakdown of the code:

```typescript
let myImg = <HTMLImageElement> document.getElementById("my-img");
console.log(myImg.src);
```
In this snippet, we're telling TypeScript that `document.getElementById("my-img")` is going to return an `HTMLImageElement`. This allows you to access properties and methods (like `.src`) that are specific to `HTMLImageElement`. 

```typescript
let data: any = 1000;
console.log((data as string).repeat(3));
```
In this snippet, we're asserting that `data` (which is actually a number) is a string. This allows us to use the `.repeat()` method which is specific to strings. However, this will cause a runtime error because `data` is a number and doesn't have a `.repeat()` method.

It's important to note that TypeScript does not perform any special checks or restructuring of data to ensure the assertion is valid. It's purely a way to tell the TypeScript compiler to treat a value as a different type. So, you should use type assertions wisely to avoid runtime errors. 

Remember, type assertions do not change the runtime behavior of your code, they only change the way your code is checked at compile time. The actual underlying value is not changed. If you assert an incorrect type, TypeScript will trust you, and you will get an error at runtime..