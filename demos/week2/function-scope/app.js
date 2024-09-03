//I need to call the function to work
greetUser();

//declaring a function
function greetUser() {
  console.log("Hello!");
}

//global scope --> this value is accessible for the rest of our code
let myGlobalValue = 7;

function add(a) {
  return a + myGlobalValue;
}

console.log(add(1));

function subtract(a) {
  return a - myGlobalValue;
}
console.log(subtract(10));

//function or local scope --> the value is ONLY accessible for the function where we declare it

function multiply(a) {
  //this variable is ONLY accessible in the multiply function
  let myLocalValue = 5;
  return a * myLocalValue;
}

console.log(multiply(2));

function divide(a) {
  //the divide function has no access to myLocalValue; it's not defined
  return a / myLocalValue;
}

console.log(divide(30));
