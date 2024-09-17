//classic function
function greet() {
  console.log("Hello!");
}

//arrow function

const greet = () => {
  console.log("Hello!");
};

//classic function (parameters)
function greet(username) {
  console.log(`Hello ${username}`);
}

//arrow function (parameters)

const greet = (username) => {
  console.log(`Hello ${username}`);
};

// const greet = username => {
//     console.log(`Hello ${username}`);
//   };

//classic anonymous function

addEventListener("click", function () {
  console.log("You clicked!");
});

//arrow anonymous function

addEventListener("click", () => {
  console.log("You clicked!");
});

//Arrow functions are absolutely optional
//! You will have preferences as you code more. My personal preferences are to only use arrow functions for anonymous functions
