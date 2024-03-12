"use strict";
console.groupCollapsed();
console.groupEnd();
console.groupCollapsed();
console.groupEnd();
console.groupCollapsed();
console.groupEnd();
console.groupCollapsed();
console.groupEnd();
console.groupCollapsed();
console.groupEnd();
console.groupCollapsed();
console.groupEnd();
console.groupCollapsed();
console.groupEnd();
console.groupCollapsed();
function printInConsole(...para) {
    for (let i = 0; i < para.length; i++) {
        console.log(`The Value Is ${para[i]} And Type ${typeof para[i]}`);
    }
    return `Done`;
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
console.groupEnd();
//# sourceMappingURL=index.js.map