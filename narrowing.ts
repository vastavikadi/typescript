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
  if ("idAdmin" in account) {//this is called in operator for narrowing
    return account.idAdmin;
  }
  return account.name;
}
