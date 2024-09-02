console.log("Test");

//different data types

//this is a string
//for strings we can use "string" 'string' `string`
let myString = `example`;
let myOddString = "4";

//this is a number or integer
let myNumber = 7;

//this is a boolean
//booleans can be true or false
let myBoolean = true;
let myFalseBoolean = false;

let username = "Manny";
let myLocation = "Norwich";
//I use myLocation because location is a reserved word

//I am concatenating variables and strings
console.log("My name is " + username + " and I live in " + myLocation + ".");

//We can also concatenate elements with backticks
//Template or string literals
console.log(`My name is ${username} and I live in ${myLocation}.`);

//typeof operator
// we can check the data type stored in a variable
console.log(typeof username);
console.log(typeof myFalseBoolean);

//other operators!!!

// 5 is greater than 3
let isGreater = 5 > 3;

//3 is less than 5
let isLess = 3 < 5;

//3 is equal to 3
//this is not an operator. Here we are assigning the value 3 to a variable called number
let number = 3;

//this is an operator that checks the value
let isEqualInValue = 3 == 3;
3 == "3"; // this is truthy

//this in an operator that checks the value and data type
3 === 3; //truthy
3 === "3"; //this is falsey

5 < 8; //truthy
6 == "number"; //falsey
6 > 9; //falsey

//null and undefined

//null is a data type with a value of nothing
let myEmptyVariable = null;
console.log(myEmptyVariable);

//undefined happens when you declare an element (for example, a variable, and you don't assign it a value)
let myVariable;
console.log(myVariable);
