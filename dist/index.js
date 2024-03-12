"use strict";
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
//# sourceMappingURL=index.js.map