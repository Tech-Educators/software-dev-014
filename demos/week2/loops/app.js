//types of loops

//! We always expect the loop to stop

//for loop --> to repeat an action for a limited specific amount of times
//structure of a for loop
//initialisation --> starting value
//condition --> we set a condition to make sure the loop ends
//while the condition is truthy, the loop will run; when the condition is falsey, the loop will stop
//afterthought --> this increases or decreases the initial value to make sure we reach the condition

// for (initialisation; condition; afterthought) {
//   repeated action;
// }

//example of for loop
//the increment operator ++ increases a value by 1
//the decrement operator -- decreases a value by 1
for (let i = 0; i < 5; i++) {
  console.log("YOOOOHHHHOOOOOO, I am running in a loop!");
}

//while loops
//we use while loops to run an action for an unlimited number of times or when we don't know exactly the specific amount of times
//example: to not show a website content page until the user logs in

//structure
// while (condition){
// repeated action
// }

let counter = 1;

//this while loop will run forever, please, don't run it on your computer
while (counter < 5) {
  console.log("Not 5 yet");
  //I am adding this increment, so the while loop finishes
  counter++;
}

//for ... of
//this is a concise version of a for loop

let techStack = ["html", "css", "js", "node.js", "git"];

//we can use the length of the array as our condition, so the for loop will run for 5 times, in this case
//index 2 --> js (index starts at 0)

for (let language of techStack) {
  console.log(language);
}

//this is what is happening in our for of loop
let language;
//iteration 1
language = "html";
//iteration 2
language = "css";
//iteration 3
language = "js";
//iteration 4
language = "node.js";
//iteration 5
language = "git";

//forEach() --> an array method that performs an action for each item in an array

let staff = ["Manny", "Joe", "Sam", "Tim"];

staff.forEach(function (memberOfStaff) {
  //this is an anonymous function --> we use anonymous functions when we only want to use them once, and never call them
  //callback functions that we use with methods (like forEach) tend to be anonymous
  console.log(memberOfStaff);
});

let memberOfStaff;
//iteration 1
memberOfStaff = "Manny";
//iteration 2
memberOfStaff = "Joe";
// etc

//a classic for loop with an array
let food = ["pasta", "pizza", "burger", "sushi", "curry", "noodles"];

//the initial value is 0 to match the index of the first item in the array
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

//different ways of writing the condition
// i < 5;
// i <= 4;
// food.length;
