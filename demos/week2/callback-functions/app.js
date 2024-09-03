//callback functions
//we are going to declare a parameter, and the argument of this parameter is a function

//regular function with parameters
//the arguments here are values (numbers)
function add(a, b) {
  return a + b;
}

// console.log(add(2, 4));

//a function with parameters, and those parameters have other functions as arguments
//the arguments here are not values, they are other functions

function sayHello() {
  console.log("hello!");
}
// console.log(sayHello());

function sayGoodbye() {
  console.log("goodbye");
}

function sayGoodMorning() {
  console.log("Good morning!");
}

function greet(functionParameter) {
  //this parameter will be replaced with a function argument (see lines 33, 34, 35)
  functionParameter();
}

// console.log(greet(sayHello));
// console.log(greet(sayGoodbye));
console.log(greet(sayGoodMorning));

//when we call the greet function and give it the sayGoodMorning function as an argument, the greet function will replace the parameter functionParameter with the actual sayGoodMorning function call

// function greet() {
//   sayGoodMorning();
// }
