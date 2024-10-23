//TypeScript keeps the same core elements we had in JS
console.log("hello, typescript!");

//we use the colon : to specify the type
//type annotations / signature --> :number
//type annotations use the standard data types
const myAge: number = 78;
console.log(myAge);

//This gives an error because I am trying to give a string type to a number type
// myAge = "number";

// const myName: string = "Manny";

// const isInNorwich: boolean = true;

//array
const myArray: Array<string> = ["item", "item", "item"];
const myOtherArray: string[] = ["item", "item", "item"];
const myOtherOtherArray: Array<string | number> = ["item", "item", "item"];
const myThirdArray: (string | number)[] = [1, "string"];

//object
const person: {
  personName: string;
  personAge: number;
  personLocation: string;
} = {
  personName: "Joe",
  personAge: 870,
  personLocation: "the Moon",
};

//declaring the types separately
//you can store your types in a lib folder and import them here
//you can reuse your types

import { personType } from "./types";

// type personType = {
//   personName: string;
//   personAge: number;
//   personLocation: string;
// };

const person1: personType = {
  personName: "Tim",
  personAge: 57,
  personLocation: "Venus",
};

const person2: personType = {
  personName: "Sam",
  personAge: 100,
  personLocation: "Jupiter",
};

//functions
function add(a: number, b: number) {
  return a + b;
}

//this function only accepts arguments with a number data type
//if the argument is any other data type, it will error
add(5, 7);

//what data type is TS thinking goes in here? any
//if we declare a variable with no initial value, TS infers that the type is any --> data inference

let myJob;

myJob = "instructor";
myJob = 34;
myJob = true;
myJob = ["item"];
myJob = {
  jobTitle: "instructor",
};

//TS knows what the shape of the type should look like. If I have a type string, TS knows the shape of a string
//This gives an error because that's not the shape of a number
let mySecondAge: number = 78;
mySecondAge = "65";
console.log(mySecondAge);
