function myfunction(){
    console.log("Hey");
}

function sumTwo(num1:number, num2:number){//so in the case of the functions we should always define the types of the variables/parameters we pass to them so that it makes it clearer
    //defining variables types solely is optional because ts is smart enough to know/infer the type of the variable by itself (from the initialised value of the variables)
    return num1+num2;
}

function getUpperCase(val:string){
    return val.toUpperCase();
}

//arrow function
const login=(email:string, domain:string, isPaid:boolean=false)=>{
    console.log(email, domain, isPaid)
}

login("hey", "hey",true);//now if we sometimes do not want to pass in all the arguments then we can set the default values for some of them :- isPaid:boolean =true //here by default the value of isPaid is gonna be true os whenever it is not passed then default value is taken in

console.log(getUpperCase("Hey"));

console.log(sumTwo(6,5));


function sumThree(num1:number, num2:number,num3:number):number{
    return num1+num2+num3;
}
const getSumThree=(num1:number, num2:number,num3:number):number=>{//this is how u do it for arrow function
    return num1+num2+num3;
}

console.log(sumThree(4,3,2));//it is not giving out any errors although we pass in 3 numbers expecting their sum to be returned but actually returning the string, to solve this and be confirmed about the datatype to be returned by the function simply define the datatype of the function as well. How its done: function sumThree(num1:number, num2:number,num3:number):number //its done


//how to handle if we were to return more than one type. example below:
function responseJson(val:number){
    if(val>5)return true;
    return "500 Internal Server Error";//here there are two types that are being returned depending on the condition but how to appedn these both (boolean and string as the types for the function)
    //for this we use something called Union //later explained
}


const heros =["IronMan", "Thor","America's Ass"];

const result = heros.map((hero:string):string=>{//now here we dont need to tell ts that the type of the hero is gonna be string because it is smart enough to know that (we can if we wnat additional security hero:string or (hero:string)) but surely need to define the type of return this makes and we do it like: (hero):string//this is the datatype of the function so by default the type is gonna be string[](array of strings) but we can manipulate
    return `Our hero is ${hero}`
})
console.log(result);

const numbers=[1,2,3,4]

console.log(numbers.map((num:number):string=>{
    return `num is ${num}`;
}))


//console log and handling errors
function consoleError(errmsg:string): void{//Function (void) doesn’t return a value, but does finish executing	Logging to console, finishing a task
    console.log(errmsg);//the function is not returning anything hence the type of the function should be void
}

function handleError(errmsg:string):never{//type for throwing errors will always be never because Function (never) returns at all — because it throws or loops forever	Throwing an error or infinite loop or crashes the program
    throw new Error(errmsg)
}

//example
function fail(message: string): never {
  throw new Error(message);
}

function process(input: string) {
  if (input === "") {
    return fail("Input cannot be empty");
  }

  console.log("Processing:", input);
}
process("");
export{}