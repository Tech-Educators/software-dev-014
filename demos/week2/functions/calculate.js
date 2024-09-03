//we want to create a function to do operations
//we want to add numbers
//we want to subtract numbers
//we want to multiply numbers
//we want to divide numbers

//function to add
function add(a, b) {
  return a + b;
}
// console.log(add(3, 5));

//function to subtract
function subtract(a, b) {
  return a - b;
}

// console.log(subtract(9, 4));

//function to multiply
function multiply(a, b) {
  return a * b;
}
// console.log(multiply(4, 7));

//function to divide
function divide(a, b) {
  return a / b;
}

// console.log(divide(4, 2));

//function to calculate multiple operations
function calculate(a, b, operator) {
  if (operator === "+") {
    //I am calling my add function here
    //I need the return here, so I can see the value of the operation
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    console.log("Wrong operator");
  }
}

console.log(calculate(3, 5, "+"));
console.log(calculate(3, 5, "*"));
