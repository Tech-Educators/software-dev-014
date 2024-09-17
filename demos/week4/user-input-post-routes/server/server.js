//!we need to npm i cors to install cors, so our server can accept data from the client

//I need to access express
import express from "express";

//I need to access cors
import cors from "cors";

//I need to initialise express
const app = express();

//I need to tell express to use cors when acceptin data from the client
app.use(cors());

//I need to tell express to read JSON
app.use(express.json());

//I need to tell my app to listen to a specific PORT
app.listen(8080, function () {
  console.log("Server is running and ready to rumble");
});

//you can also keep the PORT value separately
//!you will need to replace this local host value with your local host deployment url

// const PORT = 8080;

// app.listen(PORT, function () {
//   console.log(`Server is running and ready to rumble in PORT ${PORT}`);
// });

//I need to write an endpoint for my root route
//I want to READ data --> GET method

app.get("/", function (request, response) {
  //what task do we want this endpoint to store?
  response.json({ message: "You are looking at my root route. How roude!" });
});

//I need to write an endpoint to ADD new data
app.post("/add-data", function (request, response) {
  //we will use our request parameter to access the data in the body
  //the body stores the data that comes from the user
  const bodyData = request.body;

  //this console log will be replaces with code that inserts the body data into the database
  console.log(bodyData);

  //we will use our response parameter to see what data was added
  response.json({
    message: "Body data received",
    location: `${bodyData.location}`,
  });
});
