/*
  Class
  - Implement Interface
*/

interface Settings {
  theme: boolean;
  font: string;
  save(): void;
}

class User implements Settings {
  constructor(public username: string, public theme: boolean, public font: string) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let userOne = new User("Elzero", true, "Open Sans");

console.log(userOne.username);
console.log(userOne.font);

userOne.save();
userOne.update();