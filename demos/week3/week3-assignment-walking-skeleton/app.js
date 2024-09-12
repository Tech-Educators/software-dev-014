console.log("test");

//we need to store two global values: cookie count and cookies per second
//choose one way, the one that's easier for you
let cookieCount = 0;
let cookiesPerSecond = 0;

//if you choose the stats object, you don't need the global variables above
let stats = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};

//DOM manipulation
//select the DOM elements (buttons, imgs, p, ...)

//a way to store the shop upgrades that come from the API
let shopUpgrades = [];

//fetch the items from the API --> https://cookie-upgrade-api.vercel.app/api/upgrades
function getShopUpgrades() {
  //fetch the data
  //translate it into JSON
  //PUSH the items into the shopUpgrades array above
}

//an event listener to click on the cookie button
//select the cookie img or button
//write your event handler and event listener
function handleCookieClick() {
  //when I click on the cookie, the value of cookieCount goes up by one
}

addEventListener("click", handleCookieClick);

//we need a timer that increases the cookieCount value by one every second
setInterval(function () {
  //I want to increase the value of cookieCount by one every second
  //I want to update the value displayed on the page (this task can also be a separate function, for example, updateCookieCount(), and you would call this function inside the setInterval function)
  //   updateCookieCount();
  //I want to store this value in local storage (this task can also be a separate function, for example, storeLocalStorage(), and you would call this function inside the setInterval function)
  //   storeLocalStorage()
}, 1000);

// function updateCookieCount() {
//I update the cookieCount value (this is just one option)
// }

// function storeLocalStorage(){
// I store the values in local storage (this is just one option)
// }

//==============================================
//extra function blocks to give you other ideas
//these building blocks are just possible solutions to probles you might find

function renderShopUpgrades() {
  //create DOM elements
  //you will use a loop or array method
  shopUpgrades.forEach(function (upgrade) {
    //for each item in the array, assign the value to a DOM element
    //append the element to the DOM
  });
}

function saveLocalStorage() {
  //a method that turns your data into string soup
  //a method to set the data into key and values in local storage
}
