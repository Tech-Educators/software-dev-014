//access to express and cors
import express from "express";
import cors from "cors";

//access dotenv
import dotenv from "dotenv";
//configure dotenv for this server
dotenv.config();

//set up our database connection to accept requests from the server
//access pg
import pg from "pg";
//set up a database pool using our connectino string
//get connection string from .env file
const dbConnectionString = process.env.DATABASE_URL;

//set up our database request pool
//the Pool will collect all the requests from the server and the waiting times will be shorter

//We have to export db, so we can import it in the seed.js file
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//initialise my express server
const app = express();

//tell express to use json
app.use(express.json());
//tell express to use cors
app.use(cors());

//set up my local port (8080)
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});

//root route
app.get("/", (req, res) => {
  res.json({ message: "You are looking at my root route. How roude!" });
});

//I need an endpoint to READ the data in my pets table
//We can use SQL to query our database and get the data
//Our database is not hosted locally, so we don't know how long the data takes to travel
app.get("/pets", async (req, res) => {
  const query = await db.query(`SELECT * FROM pets`);
  //we can wrangle the query response to get the rows property only.
  res.json(query.rows);
  console.log(query);
});

//whenever you need to specify data in your query, do NOT write the data directly. Use a PARAMETER to replace the data.

app.get("/pets-dog", async function (req, res) {
  const query = await db.query(`SELECT * FROM pets WHERE animal = $1`, ["dog"]); //when we have a parameter($1, $2, $3), we need to specify the value in square brackets after the query is finished. That value is usually provided by the user when they submit a form --> in the body data of a form (req.body.animal)
  res.json(query.rows);
});
