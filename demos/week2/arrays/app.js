// variables can store one value at a time

let myName = "Manny";
let anotherName = "Joe";
let anotherMemberOfStaff = "Tim";
let myColleagueFromLiverpool = "Sam";
let myOtherColleagueFromNorwich = "Jez";

//arrays can store more than one value at a time!
//we declare an array in the same way as we declare a variable
//an array uses square brackets and we separate the values with commas
let myColleagues = ["Manny", "Joe", "Tim", "Sam", "Jez", "Frankie"];
console.log(myColleagues);

//the length property
//the length property tells me the total amount of items in the array
myColleagues.length;
console.log(myColleagues.length);

//the index property
//the index tells me in waht position in the array the item is
//!the index starts at 0

myColleagues[3];
console.log(myColleagues[3]); //output: Sam

//I can add a new item to the array using the index
//If we skip an index, that index would have an undefined item
myColleagues[6] = "Heinry";

console.log(myColleagues);

//you can assign a new value to an item using its index
myColleagues[2] = "Tom";
console.log(myColleagues);

//you can have more than one data type in your array
let myFavouriteThings = ["walking in nature", 18, true, "lemon pie", "anime"];

//STRETCH GOAL: there are some default array methods that we can use to add items at the beginning, at the end, in the middle of arrays
