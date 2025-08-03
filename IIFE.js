// To run code immediately
// To create a private scope. Variables inside an IIFE don’t leak outside.

(function getName(){//named IIFE with name getName
    var printName = 'Yash'
    console.log(printName);
})();
//we need to finish the first IIFE then only second will run and for that use semicolon at the end of the first IIFE
(()=>{//unnamed/anonymous IIFE (arrow function)
    var printName = 'Yash'
    console.log(printName);
})()//we dont need a semicolon to turn it off for the next IIFE as it is an arrow function IIFE

// const ourName = printName;//not available here
// console.log(ourName);


//Best use case example
const counter = (function () {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();

// console.log(counter().increment());
// console.log(counter().increment());
// console.log(counter().getCount());this is also going to work in this case u r first calling the function and then the methods inside it
//best way for it is to make the function IIFE and then call its methods


console.log(counter.increment());//why need to run the function first? dumb because the methods are inside the function and that too inside the return block and its gonna be return only when the function runs
console.log(counter.increment());
console.log(counter.getCount());
