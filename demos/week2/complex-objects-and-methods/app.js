//an object
//properties --> variables in an object
//methods --> functions in an object

let city = {
  //properties
  cityName: "Norwich",
  cityPopulation: 205097,
  cityColours: ["green", "yellow"],
  cityTechCompany: {
    staff: ["Manny", "Sam", "Tim", "Frankie"],
    locations: ["Norwich", "Hull", "Leicester", "Ipswich", "Cambridge"],
  },
  //methods --> anonymous functions with a key
  greetVisitor: function () {
    console.log("Hello, earthling!");
  },
  greetSpecificVisitor: function (visitor) {
    //this function has local scope!
    console.log(`Hello ${visitor}`);
  },
};

//how do I access the colour green?
console.log(city.cityColours[0]);

//how do I access the location Leicester?
console.log(city.cityTechCompany.locations[2]);

//how do I access the method?
console.log(city.greetVisitor());
console.log(city.greetSpecificVisitor("Tim"));

//you can use the properties of your object as the argument for the method inside the same object
console.log(city.greetSpecificVisitor(city.cityTechCompany.staff[0]));

//complex objects you have been using all along!

// console = {
//     log: function (message) {},
//   };

//Have a look at the console object!
console.log(console);

//the document element is an object!
// let document = {
//     body: {
//         textContent: "value"
//     }
//     style: {

//     },

// }
