// const User = {
//   name: "hey",
//   age: 8,
//   isActive: true,
// }; //this is an object but the problem of types comes when we pass the object or return the object from a function

function returnObject(): object {
  //this is a function which will return an object
  return {};
}

function returnAsObject(): {} {
  return {};
} //this is also a function which returns object

let user = { name: "yes", email: "yes", age: 7, isActive: true, isPaid: false }; //an object to check the odd behaviour

function userInfo(): { name: string; email: string; age: number } {
  //this function must take return an object with (name, email and age) but no type for input
  return user; //if i write {name:"yes", email:"yes", age:7, isActive:true} then it will throw an error but there is a way in which it does not throw an error and where typescript fails to be different from js and that is to create an object separately and returning that like i did
}

function userInfo2({
  name,
  age,
  isActive,
}: {
  name: string;
  age: number;
  isActive: boolean;
}): { name: string; age: number; isActive: boolean } {  //this function must take return an object with (name, email and age) but there are types for input and also inputs are explicitly mentioned
  return user;//still no error detected, failure of typescript
}

//overloading in typescript
// You must declare overload signatures first, then provide one actual implementation.

// Overload declarations
function returnResponse(): number;
function returnResponse(input: { name: string; isActive: boolean }): string;

// One actual implementation
function returnResponse(input?: {
  name: string;
  isActive: boolean;
}): number | string {
  if (!input) {
    return 8;
  }
  return `Hello ${input.name}`;
}



//type aliases, how to create our own types

type User ={
    name:string;
    age:number;
    isActive:boolean;
    isPaid:boolean
}

// function createUser(user1:User):User{//function accepts of type User and also returns User but actually in returns its user which is again the same odd/bad behaviour
//     return user;
// }
// createUser({name: "yes", age: 7, isActive: true, isPaid: false})

export {}