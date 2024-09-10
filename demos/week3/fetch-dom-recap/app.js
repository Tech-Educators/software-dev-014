console.log("Helloooooo");

//fetch data from API

async function getPosts() {
  //!the url in my fetch method comes from the API documentation
  //we need async and await, so the browser gives us the data when it's ready, instead of a promise at the time the browser is reading the code
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response);
  //I need my data to be written in JSON
  const data = await response.json();
  console.log(data);

  //data wrangling happens here, if necessary

  //I need to return the data, so it is available to the rest of my functions
  return data;
}

//I am going to make a function that creates the DOM elements where my data is going to appear
const postsContainer = document.getElementById("posts-container");

function createPosts(titleContent, bodyContent) {
  const title = document.createElement("h2");
  const body = document.createElement("p");

  title.textContent = titleContent;
  body.textContent = bodyContent;

  postsContainer.appendChild(title);
  postsContainer.appendChild(body);
}

//I am going to make a function that matches the fetched data with the DOM elements I created

async function displayPosts() {
  const postsData = await getPosts();

  //in this case, it's more convenient to do the data wrangling here
  //I have added a forEach loop method to run through the array of objects and post each of them on the page
  postsData.forEach(function (post) {
    createPosts(post.title, post.body);
  });
}

displayPosts();
