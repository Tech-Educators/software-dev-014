console.log("test");
//the document is a representation of my HTML file
console.log(document);

//I am going to select the button, so I can use it in JS
//I can use getElementById, if my button has an id, or use querySelector

const myButton = document.querySelector("button");

console.log(myButton);

//we are going to make the button interactive with an event

//the event has two parts:
//the event handler --> action that we want to happen when the user interacts with our HTML element
//the event listener --> an element that listens for user interaction and triggers the event handler

//first, we are going to build the event handler
function handleClick() {
  console.log("You have clicked the button!");
}

//second, we need to set up our event listener
//addEventListener has two arguments!
myButton.addEventListener("click", handleClick);

//we are going to have a button that counts how many clicks the user does

//I select the button from the DOM
const myCountingButton = document.getElementById("count-button");

//we need this variable in global scope, so the event listener has access to this as well
let clicks = 0;

//event handler
function handleCounting() {
  clicks = clicks + 1;
  console.log(clicks);
  myCountingButton.textContent = `You have clicked ${clicks}`;
  //   "You have clicked " + clicks
}

//event listener
myCountingButton.addEventListener("click", handleCounting);

//callback function recap

// function sayHello() {
//   console.log("Hello!");
// }

// function greet(greeting) {
//   greeting();
// }

// greet(sayHello);
