/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function addAll(...nums: number[]) : number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
    }
    // nums.forEach((num) => result += num);
    return result;
  }
  
  console.log(addAll(10, 20, 30, 100, 10.5, +true));