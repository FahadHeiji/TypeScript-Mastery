/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));

