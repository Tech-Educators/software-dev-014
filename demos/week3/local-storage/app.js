//we are going to store some data in the browser local storage container

const myVeryImportantPieceOfData = {
  favouriteFood: "pasta",
  names: ["Joe", "Jez", "Sam", "Manny"],
  important: "chocolate",
  randomNumbers: [1, 2, 6, 0, 7],
  numberOfClicks: 134,
  superImportant: "chai",
};

//STEP 1: prepare this data to go into local storage
//! local storage only accepts strings!!!!!
//we are going to stringify the data

const stringifiedData = JSON.stringify(myVeryImportantPieceOfData);
console.log(stringifiedData);

//STEP 2: put the data into local storage
//setItem needs two arguments: first argument is the key, second argument is the value
localStorage.setItem("myVeryImportantPieceOfData", stringifiedData);

//================================================

//Read data from local storage

///STEP 1: Retrieve the data
//getItem needs one argument: the name of the key
const retrievedData = localStorage.getItem("myVeryImportantPieceOfData");
console.log(retrievedData);

//STEP 2: Translate (Parse) the data
const myOriginalLovelyObject = JSON.parse(retrievedData);
console.log(myOriginalLovelyObject);

//Why do we want data in local storage?
//! Local storage is not safe! --> there is not encryption applied
// - data from form inputs ❌
// - passwords, usernames ❌
// - reusable data ✅
// - autofill ❌
// - cookies ✅
// - data from previous sessions 🤔
// - cookie clicker progress ✅
// - site preferences (themes...) ✅
// - personal data ❌
// - watermarks ✅
// - data to be accessed fast 🤔
