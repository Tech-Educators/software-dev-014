//we want to test a function --> the logic works!

function countToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    debugger; //this will stop the code from running and we will use the dev toold to check
  }
}
countToTen();

//I want to test a function that adds numbers
function add(a, b) {
  const sum = a + b;
  console.log(sum);
  debugger;
}

// add(5, 9);
