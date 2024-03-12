/*
    Typescript Assignments Lessons From 1-to-11

    Before You Start Search For:

        - Typescript Configuration File
        -Typescript Type Annotations
        -Statically Typed Languages
        -Static Type Checking
        -Typescript Type Annotations
        -Programming Type Signature
        -Typescript Optional Operator
*/

/*
        اسْتَعِنْ باللَّهِ وَلَا تَعْجِزْ
*/

// Q-01:
console.groupCollapsed();
// Edit tsconfig.json File
// "rootDir": "./project/files/typescript"
// "outDir": "./dist/compiled/javascript"

console.groupEnd();

// Q-02:
console.groupCollapsed();
/*
function calculate(numOne : number, numTwo : number) : number {
    return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
// console.log(calculate("10","20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
*/

console.groupEnd();

// Q-03:
console.groupCollapsed();

/*

function printInfo(valueOne : (string | number), valueTwo : (string | number )) : string{
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
*/

console.groupEnd();

// Q-04:
console.groupCollapsed();

/*
let arr: (number | boolean[] | (string | (string | number)[])[])[] = [1,2,3,[true,false],["Hi","There",["I","Am","The","GOAT",1,2,3]]];
*/

console.groupEnd();

// Q-05:
console.groupCollapsed();

/*
function reportErrors(username, age: number) {
  let rank = "Professor";
  return `Username: ${username}`;
  console.log("We Will Not Reach Here");
}


console.log(reportErrors("Elzero", 40));
*/

// "noUnusedParameters": true,
// "allowUnreachableCode": false,
// "noUnusedLocals": true,
// "noImplicitAny": true,

console.groupEnd();

// Q-06:
console.groupCollapsed();

/*
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "",c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero
*/

console.groupEnd();

// Q-07:
console.groupCollapsed();

/*
function showMsg(user?, age?, country?) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));
*/

console.groupEnd();

// Q-08:
console.groupCollapsed();

// /*
// Write The Function Here

function printInConsole(...para) {
  for (let i = 0; i < para.length; i++) {
    console.log(`The Value Is ${para[i]} And Type ${typeof para[i]}`);
  }

  return `Done`;
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
// */

console.groupEnd();
