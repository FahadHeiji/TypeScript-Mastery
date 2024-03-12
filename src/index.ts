/*
  Type Annotations With Arrays
*/

let all: string | number | boolean = "Osama";

all = "A";
all = 100;
all = true;

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}