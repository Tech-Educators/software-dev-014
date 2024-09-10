//NPM setup
//STEP 1: make our app able to install packages by initialising npm
//npm init -y

//STEP 2: install any packages that you want! We get the install command from the documentation
//npm install packagename

//STEP 3: add a script to our package.json to run your file
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "node app"
//   }
//npm run scriptname

//STEP 4: We need to ignore our node_modules folder because GitHub has limited space
//We will make a file called .gitignore and add any folders or files I don't want on GitHub

//STEP 5: We need to tell our package.json what version of JS we are going to use

// const express = require("express"); //commonjs
// import express from express //ES6 --> module

//"type": "module"

//example of using cowsay
import cowsay from "cowsay"; //ES6 syntax

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);
