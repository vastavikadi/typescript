// Generics let you write reusable, flexible functions, interfaces, or classes that work with any data type.

// example for generics functions
function identity<T>(value: T): T {
  //here it is a function with accepting a value as an inpput that i sof type T and returning the same value of type T
  return value;
}

// Usage:
const numberResult = identity<number>(42); // number, here T can be of any type and this is the benefit of generics making it easier defining a function and that is reusable
const stringResult = identity<string>("hello"); // string
// Here, T is a generic type parameter. The function works for any type — you can reuse it for number, string, boolean, or even custom types.


//second usecase, example for generic interfaces
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

// Usage:
const response1: ApiResponse<string> = {
  data: "Success!",
  success: true
};

const response2: ApiResponse<number[]> = {
  data: [1, 2, 3],
  success: true
};

//third exmaple for generic class
class Box<T> {
  contents: T;

  constructor(value: T) {
    this.contents = value;
  }

  getValue(): T {
    return this.contents;
  }
}

// Usage:
const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");

console.log(numberBox.getValue)


//bonus for generics
function logLength<T = string>(value: T): void {
  console.log((value as any).length);
}
// <T = string>:
// This means the generic type T defaults to string if you don’t explicitly provide a type. to explicitly provide the type:(logLength<number>)
// So logLength() is assumed to work with string by default, but you can also pass other types.

// (value as any).length:
// Here, you're forcing TypeScript to allow access to .length by casting value to any, bypassing type checks.
// This works at runtime as long as the actual object has a .length property (like strings and arrays).


//ANOTHER IMPORTANT EXAMPLE
function logLength2<T extends { length: number }>(value: T): void{
    console.log(value.length);
}
// <T extends { length: number }>:
// This tells TypeScript:
// “T can be any type, as long as it has a length property of type number.”
// It's a generic constraint — you're not allowing just any type, but only types that match { length: number }.

// value: T:
// The input must conform to T, which in turn must conform to { length: number }.
// console.log(value.length):
// Now safe! Because TypeScript knows that value has a .length property
logLength2<string>("hello");

//chai and code explanation
function anotherFunction<T, U>(valueOne: T, valueTwo: U): object {
  //lets say T and U are both datatypes valueOne is of type T and similarly valueTwo is of type U
  return {
    valueOne,
    valueTwo,
  };
}

anotherFunction(3, "5"); //right it just expects two values to be passed in it and with no specific types

// but as soon as i make the U of type number it will be wrong

function anotherFunction2<T, U extends number>(
  valueOne: T,
  valueTwo: U
): object {
  //lets say T and U are both datatypes valueOne is of type T and similarly valueTwo is of type U
  return {
    valueOne,
    valueTwo,
  };
}
anotherFunction2(4, 4); //correct

// anotherFunction2(3,'4')this is now wrong as second value that U should be a number

// REAL USECASE?
//just another way of defining the types but the best example is:

interface Company {
  basePrice: number;
  mostExpensive: number;
  luxury?: boolean;
}

interface Cars<Company> {
  wheels: number;
  seats: number;
  mileage: number;
  name: string;
  company: Company;
  sunroof?: string;
}
