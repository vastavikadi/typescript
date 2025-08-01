"use strict";
//you should not be using be defining the types everyhwere you want, only in the cases its actually needed and thats the best practice
Object.defineProperty(exports, "__esModule", { value: true });
var userId = 7933084; //now here typescript is smart enough to know(as you have already defined and intialized at one place) tht userId is always gonna be number so you dont need to define it explicitly
// userId="Aditya";//not assignable 
console.log(userId);
//now the real place to define the types of the variables explicitly is as written below:
var hello;
var userName = "Aditya";
function getYourName() {
    return userName;
}
hello = getYourName();
console.log(hello);
