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

console.log(sumThree(4,3,2));//it is not giving out any errors although we pass in 3 numbers expecting their sum to be returned but actually returning the string, to solve this and be confirmed about the datatype to be returned by the function simply define the datatype of the function as well. How its done: function sumThree(num1:number, num2:number,num3:number):number //its done

export{}