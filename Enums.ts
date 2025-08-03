enum clgStudent {
    AISLE,//BY DEFAULT AISLE GETS THE VALUE AS 0 (INDEX) BUT THIS CAN BE CHANGED AS NEEDED
    MIDDLE,//then this is goin to be 1 as increasing and this further goes on
    WINDOW,//2
    LAST//3
}

const enum clgTEACHER {
    AISLE='aisle',//BY DEFAULT AISLE GETS THE VALUE AS 0 (INDEX) BUT THIS CAN BE CHANGED AS NEEDED
    MIDDLE='anything',
    WINDOW=9,
    LAST//window is 9 then this is going to 10
}

const clgMember= clgTEACHER.AISLE;//this is how we assign enums
console.log(clgMember)

// enum clgTEACHER {
//     AISLE='aisle',
//     MIDDLE='anything',
//     WINDOW=9,
//     LAST
// }
//this is above commented out enum generates the equivalent code in js using IIFE example below:
// var clgStudent;
// (function (clgStudent) {
//     clgStudent[clgStudent["AISLE"] = 0] = "AISLE";
//     clgStudent[clgStudent["MIDDLE"] = 1] = "MIDDLE";
//     clgStudent[clgStudent["WINDOW"] = 2] = "WINDOW";
//     clgStudent[clgStudent["LAST"] = 3] = "LAST"; //3
// })(clgStudent || (clgStudent = {}));

//this is definetely not vry clean and understandable and to make it clean and clear for everyone 
//we use const just before enum declaration and get the equivalent code in js like :
// var clgMember = "aisle" /* clgTEACHER.AISLE */; this is much more clear and easy to get