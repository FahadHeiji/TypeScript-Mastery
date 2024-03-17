/*
  Type Annotations With Object
*/

let myObject: {
  readonly username: string,
  id: number,
  hire?: boolean,
  skills: {
    one: string,
    two: string
  }
} = {
  username: "Elzero",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// myObject.username = "Osama";
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);