//DOM manipulation
//select the form
//select the feedback container

//FORM
//we need an event to submit the form data

//the event handler
//prevent the default behaviour
//a FormData object template
//get the formValues to insert them into the FormData object

//fetch the CREATE endpoint to send the formValues to the server
//! when you finish your assignment, make sure you replace the local host url with your server deployed url, for example: https://week4-assignment-guestbook.onrender.com
// fetch("localhost-url/endpoint"),
// {
//     method:
//     headers:
//     body:
// }

//the event listener --> submit

//FEEDBACK CONTAINER
//fetch the READ endpoint to have access to the data
//fetch the url
//! when you finish your assignment, make sure you replace the local host url with your server deployed url, for example: https://week4-assignment-guestbook.onrender.com
//parse the response into json
//wrangle database data, if necessary

//I need to display the data on the page
databaseData.forEach((item) => {
  //I need to create DOM elements to contain the data
  //! one DOM element (h1, h2, p, li...) per piece of data (username, comment...) --> for example, if I am getting username and comment from the database, I need to TWO DOM elements, one for username, and one for comment
  //I need to assign the values to the text content property
  //for example, the text content property for my h1 will have a value of the username from my database data
  //I need to individually append those elements to the DOM
});
