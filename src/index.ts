/*
    Typescript Assignments Lessons From 1-to-11

    Before You Start Search For:

        - Typescript Data Types

        -Typescript Unknown

        -Typescript Type Aliases

        -Typescript Type Aliases Extend

        -Typescript Type Examples

        -Typescript Union
      
        */

/*
        اسْتَعِنْ باللَّهِ وَلَا تَعْجِزْ
*/

// Q-01:
console.groupCollapsed();
// Write Your Code Here
type n = number;
// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
console.log(myData);
myData = +true; // No Problem Here

console.log(myData);

console.groupEnd();

// Q-02:
console.groupCollapsed();

// Write Your Code Here
type b = boolean;

type mix = n | b;
// Do Not Edit Here
let myInfo: mix;
myInfo = 1000; // No Problem Here
console.log(myInfo);
myInfo = true; // No Problem Here
console.log(myInfo);

console.groupEnd();

// Q-03:
console.groupCollapsed();

// Write Your Code Here
type Info = {
  theName: string;
  theAge: number;
};

type Full = Info & {
  country: string;
};
// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

console.groupEnd();

// Q-04:
console.groupCollapsed();

function yesOrNo(val: number | boolean): "Yes" | "No" {
  if (+val > 10) {
    return "Yes";
  } else {
    return "No";
  }
}

// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

console.groupEnd();

// Q-05:
console.groupCollapsed();

type custom = "Yes" | "No";
function isHeOld(age: number): custom {
  if (age > 40) {
    return "Yes";
  } else {
    return "No";
  }
}

// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

console.groupEnd();

// Q-06:
console.groupCollapsed();

let post : readonly [number,string,boolean];
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

// post.push("Elzero"); // Error => Cant Add
const [id,title,state] = post;
// Create Destructuring Here

// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true

console.groupEnd();

// Q-07:
console.groupCollapsed();

// Create Enums + Function Here

const insane = (num : number)=> (num > 0)? Game.Hard - num : Game.Hard - Math.floor(Math.random() * (5 - 1 + 1)) + 1;
enum Game{
  Easy =100,
  Medium = Easy - 20,
  Hard = Medium - (Easy / 2),
  Insane = insane(10)
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20

console.groupEnd();

// Q-08:
console.groupCollapsed();

const user: {
   username: string,
  age: number | string,
  website?: string,
  skills: {
    frontEnd: string[],
    backEnd: (string | number)[]
  }
} = {
  username: "Elzero",
  age: 40,
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"]
  }
}

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);

console.groupEnd();
