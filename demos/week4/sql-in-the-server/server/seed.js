//This file is used to write SQL to create tables and insert dummy data
//To seed a database is to manually insert data for testing purposes

//I need to import db from the server file
//I use {} to destructure just ONE element --> db
import { db } from "./server.js";
// import { db } from "..server/server.js";

//Write a SQL query to create a new table
//We need to tell our server where to send the query
//db represents our database
//the query method needs the argument to be a string
//if we already have a table with the same name, we need to make sure we don't create a new table with the same name
//IF NOT EXISTS

db.query(`CREATE TABLE IF NOT EXISTS pets (
    id SERIAL PRIMARY KEY,
    animal TEXT,
    date_of_birth DATE,
    colour VARCHAR(255)
);`);

//I want to insert data into the pets table
//use single quotes for text
db.query(`INSERT INTO pets (animal, date_of_birth, colour)
    VALUES ('dog', '2015-05-30', 'brown'),
    ('cat', '2015-05-30', 'black')`);
