// const tuple:[number, number, string, boolean]=[1,2,'5',6];this is wrong here because in declaration we have given that index[3] of the array should be a boolean. It should follow the strict order without any compromise

const tuple:[number, number, string, boolean]=[1,2,'5',false];//this kinda type declaration following orders are helpful in API calls and others where order matters

type tupleUser =[number,string];//these should be strictly followed
const userT1: tupleUser  =[3,'4'];

//another bad behaviour of ts in tuples
// userT1[1]='8'; 
// userT1.push();these works technically should not as it is const and we are declaring and also the methods like unshift shift and all also works which should not (works only for defined types like in it the types of tupleUser are number and string and hence both can be pushed)

