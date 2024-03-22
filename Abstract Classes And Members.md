In TypeScript, an **abstract class** is a type of class that can't be instantiated directly. This means you cannot create an object of an abstract class. It is designed to be extended by other classes. An abstract class typically includes one or more abstract methods or property declarations. The class which extends the abstract class must define all the abstract methods.

In this code, `Food` is an abstract class with a constructor and an abstract method `getCookingTime()`. The constructor has a public parameter `title`, which automatically creates and initializes a public property in the class.

```typescript
abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime() : void;
}
```

The `Pizza` and `Burger` classes extend the `Food` abstract class and therefore must implement the `getCookingTime` method. They also have their own constructors which call the `super` function to invoke the constructor of the `Food` class.

```typescript
class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Pizza Is 1 Hour`);
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime() : void {
    console.log(`Cooking Time For Burger Is Half Hour`);
  }
}
```

Finally, an instance of the `Pizza` class is created and its properties and methods are accessed:

```typescript
let pizzaOne = new Pizza("Awesome Pizza", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
```

This code demonstrates the concept of **polymorphism**, where the `getCookingTime` method behaves differently depending on whether it's called on an object of type `Pizza` or `Burger`. This is a key feature of object-oriented programming..

