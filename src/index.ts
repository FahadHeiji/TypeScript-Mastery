/*
  Interface
  - Extending Interfaces
*/

interface User {
  id: number;
  username: string;
  country: string;
}


let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
}

console.log(user.id);