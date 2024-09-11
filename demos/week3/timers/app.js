console.log("tessssssst");

//setTimeout() is a method
//we need two arguments: task and the time in milliseconds
setTimeout(function () {
  console.log("I happen after one second ONCE!");
}, 1000);

//same timeout with an arrow function
setTimeout(() => {
  console.log("I happen after one second ONCE!");
}, 1000);

//alternative way to write our timeout
function timeoutAction() {
  console.log("Hey, I am outside the timeout method!");
}

setTimeout(timeoutAction, 5000);
setTimeout(timeoutAction, 10000);

//setInterval() is a method
//we need two arguments: task and the time in milliseconds

setInterval(function () {
  console.log("I repeat myself every 3 seconds");
}, 3000);

//we can combine setInterval and setTimeout to clearInterval() --> stop the interval
const myInterval = setInterval(function () {
  console.log("I repeat myself every 2 seconds");
}, 2000);

function stopTheIntervalPlease() {
  setTimeout(function () {
    //we need to tell the clearInterval method what interval we want to clear
    clearInterval(myInterval);
  }, 10000);
}

stopTheIntervalPlease();
