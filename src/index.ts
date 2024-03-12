/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

let theName = "Elzero";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Elzero Web School";
let allVars; // Any

theName = "Osama";
all = 100;

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));
