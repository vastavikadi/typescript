//you should not be using be defining the types everyhwere you want, only in the cases its actually needed and thats the best practice

let userId: number= 7933084;//now here typescript is smart enough to know tht userId is always gonna be number so you dont need to define it explicitly

// userId="Aditya";//not assignable 

console.log(userId);

export {}