type NormalUser = {
  nameOfUser: string;
  age: number;
};

type Admin = {
  username: string;
  age: number;
};

const nameOfUser = "Aditya";
const age = 5;

const user1: NormalUser | Admin = {
  //this is called union where user1 can either be NormalUser or A
  nameOfUser, //used shorthand property (always remember while using these the variable name needs to be same as of the key name)
  age,
};
console.log(user1);

//another example
function getUserId(id: number | string) {
  // id.toUpperCase(); this is not allowed because id can be any of these hence and needs to check before any actions
  if (typeof id === "string") {
    //when you try to chamge the type here to number then again error at 25 this shows how brilliant ts is
    id.toUpperCase();
  } else {
    id.toPrecision();
  }
}

//how to have mixed values in arrays
const studentsDetails: (string | number)[] = [2, 3, 4, "4"]; //this array can have both number and string
//string|number[] - either string or number arrays

//we can also restrict the input options to the selected ones
let myBirth: "Upper" | "Lower" | "Middle"='Middle'//now as you can see i can only enter the value of the variable as Upper lower or middle
