console.log("I am here, are you?");

// declaring functions
// function functionName(parameters – optional){
//     action to perform
// }

//I want to write a function to say hello in the console
function sayHello() {
  console.log("Hello, stranger!");
}

//we need to call or invoke our function for it to perform the task
sayHello();

//I want to say hello to the user
//I have added a parameter (which works as a variable) and we will give it the value later in the call
function sayHelloToUser(username) {
  //we are concatenating strings here
  console.log("Hello " + username);
  //we are using string or template literals here
  //   console.log(`Hello ${username}`);
}

//we are going to call the function and give an argument (a value) to the parameter (variable)
sayHelloToUser("Joe");
sayHelloToUser("Manny");
sayHelloToUser("Tim");

//I want to have a function to say a greeting to different users

function greetUser(greeting, user) {
  console.log(`${greeting}, ${user}!`);
}

//we need to write the arguments to match the order of our parameters
greetUser("Good morning", "Cordelia");
//If you don't give an argument to every parameter, the console will say undefined
greetUser("Good afternoon");

// I want have a function that adds two numbers
// The code we write inside the function is only accessible for that particular function
//If we want an element in the function to be available outside the funtion, I need to return it
function addNumbers(number1, number2) {
  return number1 + number2;
}

console.log(addNumbers(4, 6));
console.log(addNumbers(7, 8));

// we have a function that creates images
//!disclaimer: this code does not work, it's just an example you can expand on, if you wish
function createImage(imageSrc, imageAlt) {
  const newImage = document.createElement("img");
  newImage.src = imageSrc;
  newImage.alt = imageAlt;
  //we will append the image here too
}

createImage("link", "beautiful image");
