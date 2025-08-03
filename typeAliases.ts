// Effects of readonly and ? on objects

type User ={
    readonly _id: string;//suppose the _id is the object id from mongoDb and u dont want anyone to manipulae it so u can mark it as readOnly and it will not be chnged
    name:string;
    age:number;
    isActive:boolean;
    isPaid:boolean;
    credCardDetails?:number;//? means it is optional and dont need to pass
}

const variable1: User={
    _id:"685954",//if use '=' instead of ':' then it throw an error like this: No value exists in scope for the shorthand property '_id'. Either declare one or provide an initializer.ts(18004) because You need to use '=' for assignment and ':' for object property values, and the object should be assigned to the variable using '='.
    name:"string",
    age:9,
    isActive:true,
    isPaid:false,//did not pass credCardDetails and no error because that is optional
}

// variable1._id="unewhzumu"//cannot change because it is read only



const variable2: User={
    _id:"685954",
    name:"string",
    age:9,
    isActive:true,
    isPaid:false,
}

const arrayOfVariables = [variable1,variable2]//Note: the type of arrayOfVariables is an array of type User
// arrayOfVariables[1]._id="56697"//not allowed because it read only

// Effects of readonly and ? on arrays
const marks: readonly number[] = [4,7,9]
// marks.push(70);//not allowed because it is read only(and defined directly)

//but it allows here
type Student = {//here To make the contents of the array immutable, do:
// type Student = {
//   readonly scores: readonly number[];
// };
  readonly scores: number[];
};
const student: Student = {
  scores: [90, 88]
};
student.scores.push(100); //Still allowed, because only the *reference* is readonly (objects are passed by refernce meaning the address of the memory location and its different for every object even if their content/value is exact same)


//small concept of Shorthand property: 

// const name = "Aditya";
// const age = 21;

// const user = {
//   name: name,  // full key-value //full syntax first key name then value name(comes from the variable name)
//   age: age     // full key-value
// };

// const name = "Aditya";//this is now shorthand
// const age = 21;

// const user = {
//   name, // same as name: name but directly passing the variable name and it is correct and called shorthand
//   age   // same as age: age
// };


//we can mix different into one

type cardNumber ={
    number:string
}

type cardExpiry ={
    number:string
}

type cardDetails=  cardNumber&cardExpiry&{//now this has taken the other two types and created a new one from these three's combination
    cvv:number
}