console.log("Foxes?");

//STEP 1: Get data from the API

//the async / await keywords are used so our getFoxes() function returns the actual data from the fetch request, instead of giving us an immediate promise.
//our code usually runs synchronously with our browser; our fetFoxes() function runs at the pace of the fetch request
//if you ever get a promise, that means you need some part of your code to run asynchronously

async function getFoxes() {
  //we use fetch to get the data from the API
  //we need to write the url we want the data from
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);

  //we need to translate (parse) our response into JSON, so we can manipulate the data
  //!we need to add await here too!
  const data = await response.json();
  console.log(data);

  //we need to filter the data to just get the image property
  //we call this data wrangling!
  const wrangledData = data.image;
  console.log(wrangledData);

  //I need to use this value in the createFoxes function
  return wrangledData;
}

//this is the classic way of fetching, before async / await were added to JS
// fetch("https://randomfox.ca/floof")
//     .then()
//     .then()
//     .then()

//STEP 2: we are going to create a function that matches the API data to an image element

//the foxContainer will store my fox images
const foxContainer = document.getElementById("fox-container");

function createFoxes(foxUrl) {
  const foxImage = document.createElement("img");

  foxImage.src = foxUrl;
  foxImage.alt = "A picture of a fox";

  foxContainer.appendChild(foxImage);
}

//STEP 3: we need a function to call getFoxes() and createFoxes()
//I want to keep my two function calls in another function, so I have more control over my code

async function addFoxesToThePage() {
  const getFoxesData = await getFoxes();
  createFoxes(getFoxesData);
}

addFoxesToThePage();
