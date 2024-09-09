console.log("test");

//we want to select our form
const form = document.querySelector("form");

//we are going to add an event listener to our form

//event handler
function handleSubmit(event) {
  //we need to prevent the default behaviour of the submit event!
  event.preventDefault();

  //create an object to store the data from the inputs
  //we need the new keyword to make sure we create an instance of our form object every time a new user inserts data
  const formData = new FormData(form);
  console.log(formData);
  //the FormData function will create an object whose properties will be the same as the attributes in the inputs
  //   const formData = {
  //     input: "Manny",
  //     input: "manny@gmail.com",
  //     input: "secretPassword",
  //   };

  //here we are collecting our object template (formData) and parsing it into the syntax of a classic object
  const formValues = Object.fromEntries(formData);
  console.table(formValues);
}
//event listener
form.addEventListener("submit", handleSubmit);
