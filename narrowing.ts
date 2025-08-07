// Narrowing is the process TypeScript uses to refine a broader type (like string | number) to a more specific one based on checks you write in your code — like typeof, in, instanceof, etc.
// This lets TypeScript understand exactly what type you're working with at runtime, so it can offer better type safety and autocompletion.

function detectTypes(val: number | string) {
  if (typeof val === "string") {
    //this is called typeof (type guard)
    return val.toLowerCase();
  }
  return val.toPrecision;
}

//always typeof null, array always comes out to be object in js and this is the behaviour of js and the type for empty string is string only

interface User5 {
  name: string;
  email: string;
}
interface Admin5 {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User5 | Admin5) {
  //   return account.isAdmin;//here isAdmin is only available for Admin5 and not for the User5 hence an error
  //   if (typeof account === "User5") {//here we cannot define it like this as typeof by default gives the datatypes that is in js ( String, number, object etc not User5 these are custom ones)
  //we use this
  if ("idAdmin" in account) {
    //this is called in operator for narrowing
    return account.idAdmin;
  }
  return account.name;
}

//instanceof narrowing
// this checks for those which can be instanciated like date: new Date() coming out of a Date class and being instanciated
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.length);
  }
}

//NOTE: This expression is not callable.
//   Type 'Number' has no call signatures. this error means that whatever u r using is a property and not a method and hence not callable dont use ();

//type predicates
type Fish = {
  swim(): void;
};
type Bird = {
  fly(): void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined; //returns true/false based on the type now further we will try to inplement it
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; //if you hover over this and then u will get to know and ts is till confused about the type of the pet although our method confirms the type but it does not return the type but returns true and false which is not so good and hence confusing for ts and to solve this in the method return type we will write "pet is fish" and it wont be confused after tht
    return "pet is a fish. its a fish food";
  } else {
    pet; //if you hover over this and then u will get to know and ts is till confused about the type of the pet
    return "pet is a bird. its a bird food";
  }
}
