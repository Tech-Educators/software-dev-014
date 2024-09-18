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

const db = new pg.Pool({
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
