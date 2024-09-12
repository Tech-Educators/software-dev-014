console.log("test");

//interact with the form

const form = document.querySelector("form");
console.log(form);

//to listen to the form event --> workshop example
// function handleSubmit(event) {
//   //we need to prevent the default behaviour of our form, which is to send our input data to the url
//   event.preventDefault();

//   //create an object placeholder using the form as reference
//   const formData = new FormData(form);

//   //here we are saving the input data with the name "colour"
//   const colour = formData.get("colour");

//   //we don't need to stringify the data here because we are already collecting a string value
//   localStorage.setItem("colour", colour);
// }

form.addEventListener("submit", handleSubmit);

//to listen to the form event --> as we learnt in the forms demo

function handleSubmit(event) {
  // we need to prevent the default behaviour of our form, which is to send our input data to the url
  event.preventDefault();

  // create an object placeholder using the form as reference
  const formData = new FormData(form);

  // we filled the object placeholder with the whole form data
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  // STEP 1: we need to stringify the form values
  const stringifiedForm = JSON.stringify(formValues);

  // STEP 2: we can now save it to local storage
  localStorage.setItem("colour", stringifiedForm);
}

//I retrieved my stringified object from local storage
const colour = localStorage.getItem("colour");
//I have translated (parsed) the stringified object into a classic object
const parsedColour = JSON.parse(colour);
console.log(parsedColour);

//I am checking if there is a value for colour in the local storage
//if there is a value, then we add that value to the input box
if (parsedColour) {
  const input = document.querySelector("input");
  //I have changed the value of the input to be the colour property in the parsedColour object
  input.value = parsedColour.colour;
}

function loadColour() {
  //get the colour from local storage on page reload
  //we are getting the item and parsing it in one go, instead of two steps
  const parsedColour = JSON.parse(localStorage.getItem("colour"));

  if (parsedColour) {
    const input = document.querySelector("input");
    //I have changed the value of the input to be the colour property in the parsedColour object
    input.value = parsedColour.colour || "#000000";
    const body = document.querySelector("body");
    //whatever colour we save in local storage will be applied to the body tag
    //the or operator || checks the first value. If it is truthy, it never checks the second value. If the first value is falsey, it checks the second value
    body.style.color = parsedColour.colour || "#000000";
  }
}

loadColour();

//we can also remove data from local storage

const clearButton = document.querySelector("#clear-button");

function clearColour() {
  localStorage.removeItem("colour");

  const defaults = {
    colour: "#000000",
  };

  document.body.style.color = defaults.colour;
}

clearButton.addEventListener("click", clearColour);
