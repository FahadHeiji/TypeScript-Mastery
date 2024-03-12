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

console.groupEnd();

// Q-02:
console.groupCollapsed();
/*
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
*/

console.groupEnd();

// Q-03:
console.groupCollapsed();

/*
function printInfo(valueOne, valueTwo) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
*/ 

console.groupEnd();

// Q-04:
console.groupCollapsed();

/*
let arr: (number | boolean[] | (string | (string | number)[])[])[];
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

console.groupEnd();

// Q-06:
console.groupCollapsed();

/*
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(????)); // Elzero
*/ 

console.groupEnd();

// Q-07:
console.groupCollapsed();

/*
function showMsg(user: number, age: boolean, country: boolean) {
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

/*
// Write The Function Here

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Output
The Value Is 1 And Type Is number
The Value Is 2 And Type Is number
The Value Is 3 And Type Is number
The Value Is 4 And Type Is number
The Value Is 5 And Type Is number
Done
The Value Is A And Type Is string
The Value Is B And Type Is string
The Value Is C And Type Is string
Done
The Value Is true And Type Is boolean
The Value Is false And Type Is boolean
The Value Is false And Type Is boolean
The Value Is true And Type Is boolean
The Value Is true And Type Is boolean
Done
*/ 

console.groupEnd();


