"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
//# sourceMappingURL=index.js.map