console.log("Test");

//let's log the document in the console
console.log(document);

//if your console is showing the document elements, use console.dir to see the list fo properties
console.dir(document);

//STEP 1: we need to select the HTML element we are going to work with.
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

//with querySelector you can select an element using the tag, the class name or the id
const secondaryContainer = document.querySelector(".secondary-container");
console.log(secondaryContainer);

//STEP 2: we are going to add new elements as children

//with createElement, I can create any new HTML element
const newImg = document.createElement("img");
console.log(newImg);
//we are going to add values to the src and alt attributes
newImg.src =
  "https://draxe.com/wp-content/uploads/2016/08/DrAxePeachThumbnail.jpg";
newImg.alt = "a basket of peaches";
newImg.className = "main-image";

//we need to append the image to the container
mainContainer.appendChild(newImg);

//Extra: we are going to remove an HTML element
// newImg.remove();
// mainContainer.remove();

//The style property
//for example, to change the them based on user preferences
document.body.style.backgroundColor = "blue";
