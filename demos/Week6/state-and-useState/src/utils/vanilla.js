//event in vanilla JS

//write an event that counts one by one
//I have a button in my DOM
//get element by id --> button

//event handler
export let counter = 0;

function handleCount() {
  counter = counter + 1;
}
//event listener
button.addEventListener("click", handleCount);
