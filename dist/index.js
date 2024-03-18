"use strict";
let user = {
    id: 100,
    username: "Elzero",
    country: "Egypt"
};
user.country = "Syria";
console.log(user);
function getData(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
getData({ id: 200, username: "Osama", country: "KSA" });
//# sourceMappingURL=index.js.map