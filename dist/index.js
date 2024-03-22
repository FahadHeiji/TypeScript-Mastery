"use strict";
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType("Elzero"));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Elzero"));
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("Elzero"));
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Elzero", true));
//# sourceMappingURL=index.js.map