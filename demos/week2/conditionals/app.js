console.log("test");

//how to write a conditional
//we need the keyword if, then the condition in brackets, then the action to perform in curly braces
//the condition is truthy, so the action happens
if (6 > 3) {
  console.log("You are right! 6 is greater than 3");
}

//We are going to change the background colour depending on the user preferences
let username1;
let username2 = "Joe";

//if the first condition is truthy, the other conditions are not checked, and their actions won't happen
//the condition here is checking if username1 exists
//in this case, username1 is falsey because the data type is undefined
if (username1) {
  //I want to change the background colour for username1
  document.body.style.backgroundColor = "blue";
} else if (username2) {
  //I want to change the background colour for username1
  document.body.style.backgroundColor = "green";
} else {
  document.body.style.backgroundColor = "grey";
}

//conditionals with multiple actions
if (username1) {
  //I want to change the background colour for username1
  document.body.style.backgroundColor = "blue";
  const username = document.createElement("h1");
  username.textContent = username1;
  username.className = "username";
  const mainSection = document.querySelector("body");
  mainSection.appendChild(username);
} else if (username2) {
  //I want to change the background colour for username1
  document.body.style.backgroundColor = "green";
  const username = document.createElement("h1");
  username.textContent = username2;
  username.className = "username";
  const mainSection = document.querySelector("body");
  mainSection.appendChild(username);
} else {
  document.body.style.backgroundColor = "grey";
}
