
// In TypeScript, both abstract classes and interfaces help define contracts for your code. They’re useful when you want to enforce a structure, but they have different use cases.

// An abstract class is a base class that cannot be instantiated directly, and can contain:
// Abstract methods (must be implemented by subclasses)
// Concrete methods (with implementation/body)
// Properties

//abstract classes
abstract class Animal {
  constructor(public name: string) {}

  // Abstract method — must be implemented
  abstract makeSound(): void;

  // Concrete method — already implemented
  move(): void {//method with a body which interfaces cannot have
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Woof!
dog.move();      // Buddy is moving

// const a = new Animal("??"); ❌ Error: Cannot create instance of abstract class


// An interface is purely a type contract — it cannot have implementations (though it can have optional/defaulted properties using ?).
interface Animal2 {
  name: string;
  makeSound2(): void;
}

class Cat implements Animal2 {
  constructor(public name: string) {}

  makeSound2(): void {
    console.log("Meow!");
  }
}

// | Feature                | Abstract Class   | Interface                |
// | ---------------------- | ---------------- | ------------------------ |
// | Can have method bodies | ✅ Yes            | ❌ No                     |
// | Can have properties    | ✅ Yes            | ✅ Yes                    |
// | Can be extended        | ✅ `extends`      | ✅ `implements`           |
// | Multiple inheritance   | ❌ (single class) | ✅ (multiple interfaces)  |
// | Instantiable           | ❌ (must extend)  | ❌ (used for typing only) |
