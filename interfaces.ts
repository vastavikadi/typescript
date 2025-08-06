//pretty similar to types but better than types and something of classes
interface UserInterface {
  readonly _id: string;
  userId: number;
  nameOfUser1: string;
  age1: number;
  startTrial: () => string; //this is a method which will return a string
  endSession(sessionId:number): void; //this is also a method and just another way to write that returns void;
}

const _id = "u93u9439";
const userId = 5794792;
let nameOfUser1 = "Hey";
const age1 = 6;

const user: UserInterface = {
  _id,
  userId,
  nameOfUser1,
  age1,
  githubId:"yieuiw",
  startTrial: () =>{ 
    return "";
  },
  endSession: (_id) => {},//the argument passed into it does not need to have the same name as in the interface defintion but the type needs to be same
};

//this can contain methods as well and it also uses the keyword extends like class :
interface Animal extends UserInterface {
  //now animal has all the property of the interface UserInterface
kind:"Herbivore"|"Carnivore";
}

const Deer: Animal = {
  _id,
  userId,
  nameOfUser1,
  age1,
  githubId:"yieuiw",
  startTrial: () => {
    return "";
  },
  kind:"Herbivore",
  endSession: () => {},
};

//what if i missed something in the UserInterface and now i need to add that property then what i can do is to reopen the interface;
interface UserInterface{//called the reopening of the interface
    githubId:string;
}//this is how it can be done but in the types once u defined the type u cant redefine it again without altering the whole type definitio
