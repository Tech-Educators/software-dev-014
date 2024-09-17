console.log("test");

//we know two ways of collecting the data from the form, and you can use either
//Object way and get method way

//select my form from the DOM
const locationForm = document.getElementById("location-form");

//I need an event listener for the user to submit their data
//event handler and event listener

function handleSubmit(event) {
  //prevent the default behaviour of the submit event
  event.preventDefault();

  //create a template object for our form data
  //make sure your FormData has the right argument
  const formData = new FormData(locationForm);
  //to fill in the values in the FormData object
  const formValues = Object.fromEntries(formData);
  //this is the get method way fo getting the value from the input directly
  //   const formValues = formData.get("location");
  console.log(formValues);

  //after we collect the data, we want to send it to the server
  //I need to reach my server POST endpoint by fetching my local host (while in development)
  fetch("http://localhost:8080/add-data", {
    //the method specifies what endpoint method we are fetching
    method: "POST",
    //the headers tell the endpoint the type of language our data is written in
    headers: {
      "Content-Type": "application/json",
    },
    //the data we are sending to the endpoint (it can only send strings)
    body: JSON.stringify({ formValues }),
  });
}

//this is an example of how the JSON object might look like
// const JSON = {
//   stringify: function () {
//  please turn this into string soup
//   },
// };

//event listener for the form
locationForm.addEventListener("submit", handleSubmit);
