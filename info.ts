//you should not be using be defining the types everyhwere you want, only in the cases its actually needed and thats the best practice

let userId: number= 7933084;//now here typescript is smart enough to know(as you have already defined and intialized at one place) tht userId is always gonna be number so you dont need to define it explicitly

// userId="Aditya";//not assignable 

console.log(userId);

//now the real place to define the types of the variables explicitly is as written below:

let hello:any;
// let hello: number;
let userName: string="Aditya";

function getYourName(){
    return userName;
}

hello = getYourName();
console.log(hello);//its all fine right now as the type of hello is any means to type defined(no type checks run for it) as soon as i define a correct type for the hello variable different from string it will throw errors
export {}