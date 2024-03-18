/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class User {
  private static created: number = 0;
  static getCount() : void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User.created++;
  }
}

let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");
// console.log(User.created);
User.getCount();