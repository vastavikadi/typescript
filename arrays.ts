//first way to define arrays: 
const SuperHeros:string[] =[]//this is an array of type string[]/array of strings

SuperHeros.push("IronMan");//but if i had defined const SuperHeros:[]=[] then must have got an error because it gets the types as never

//second way to define arrays
const SuperVillains: Array<string>=[]//now it is way to tell the variable is an array of strings
SuperVillains.push("Dr. Doom");


const matrix : number[][]=[//this is how matrix is done
    [1,2,3,2],
    []
]
