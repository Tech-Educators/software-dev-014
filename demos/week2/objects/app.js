//how have we stored data so far?

//variables --> let and const
//we can store one value at a time
let myName = "Manny";

//array
//we can store more than one value at a time
let myArray = [10, "dog", "food", 7];

//functions
//we can "store" actions or tasks --> logical elements, a block of code, statements, parameters
//a function that console logs a string
function sayHello() {
  console.log("Hello, everyone!");
}

//declaring objects

let staff = ["Manny", "Joe", "Jez", "Heinry", "Sam"];
let locations = ["Norwich", "Liverpool", "Hull"];

//how can I access "Joe" in my staff array?
staff[1]; //output: "Joe"

let manny = {
  key: "value",
  location: "Norwich",
};

let memberOfStaff = {
  staffName: "Heinry",
  staffLocation: "Hull",
  staffRole: "TA",
  startingYear: 2024,
};

//how can we access properties in an object?
//dot notation
manny.location;
console.log(manny.location);
console.log(memberOfStaff.startingYear);

//if the property does not exist, we get undefined
console.log(manny.startingYear);

//bracket notation
manny["location"];

console.log(manny["location"]);

//complex objects and arrays

//in an array of objects, each array item is an individual object
let arrayObjects = [{ key: "value" }, { key: "value" }, { key: "value" }];

let objectWithArrays = {
  key: ["item", "item", "item"],
};

let objectWithObjects = {
  key: {
    key: "value",
  },
};
