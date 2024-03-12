/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData(name?: string, age?: number, country?: string) {
    return `${name} - ${age} - ${country}`;
  }
  
  console.log(showData("Osama", 40, "Egypt"));