//my imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

//initialise express
const app = express();

//tell express to use json
app.use(express.json());

//tell express to use cors
app.use(cors());

//configure dotenv file
dotenv.config();

//set up our db using the connection string from supabase and the pg package
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

//set up a PORT for our server to listen to
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

//write an endpoint for our root route --> we use the GET method to read data
app.get("/", (req, res) => {
  res.json({
    message: "You are looking at my root route. How roude!",
  });
});

//write a READ endpoint
//As a user, I want to see a list of the biscuits and descriptions
//we need async and await because the time it takes Supabase to get the data is not the same as the time it takes for the computer to read our server file
app.get("/biscuits", async (req, res) => {
  try {
    //write a sql query to get the biscuit name and descriptions from the db
    const biscuitsData = await db.query(
      `SELECT biscuit_name, description FROM biscuits; `
    );
    //we parse the response into json
    console.log(biscuitsData);
    //this is the res without a status code
    // res.json(biscuitsData.rows);
    //you can also add a status code in the try
    res.status(200).json(biscuitsData.rows);
  } catch (error) {
    //our server will give us this error, if there is a problem with the code in try
    console.error("This is a fatal error! How dramatic!", error);
    res.status(500).json({ success: false });
  }
});

//write a READ endpoint with a JOIN SQL query
//As a user, I want to see a list of biscuits and flavours
app.get("/biscuits-flavours", async (req, res) => {
  try {
    const biscuitsData = await db.query(
      `SELECT biscuits.biscuit_name,  flavours.flavour_name 
      FROM biscuits
      JOIN biscuits_flavours ON biscuits_flavours.biscuit_id = biscuits.id
      JOIN flavours ON flavours.id = biscuits_flavours.flavour_id;
      `
    );
    res.status(200).json(biscuitsData.rows);
  } catch (error) {
    console.error("This is a fatal error! How dramatic!", error);
    res.status(500).json({ success: false });
  }
});

//write a CREATE endpoint
app.post("/add-biscuit", async (req, res) => {
  try {
    //the body --> this is the new data I am adding to the db
    //I have destructured the body object to get the properties inside directly
    //the body properties need to match the input name in your client form
    const { biscuit_name, src, description, crunchiness } = req.body;
    // const biscuit = req.body;
    // body {
    //     biscuit_name: "",
    //     src: "",
    //     description: "",
    //     crunchiness: 0
    // }
    const newBiscuit = await db.query(
      `
        INSERT INTO biscuits (biscuit_name, src, description, crunchiness)
        VALUES ($1, $2, $3, $4);
        `,
      [biscuit_name, src, description, crunchiness]
      //   [biscuit.biscuit_name, biscuit.src, biscuit.description, biscuit.crunchiness]
    );
    res.status(200).json(newBiscuit.rows);
  } catch (error) {
    console.error(
      "This is a fatal error! How dramatic! You cannot add new biscuits",
      error
    );
    res.status(500).json({ success: false });
  }
});
//write an UPDATE endpoint
app.put("/update-biscuit/:id", async (req, res) => {
  //we need to make sure we target the specific row of data we want to update
  // in the db, we have the id column
  //in the server, I can use params
  //the params will match the id value in the db
  //to represent dynamic params, we use : in the endpoint

  try {
    const { id } = req.params;
    // params {
    //     id: 1
    // }
    const { biscuit_name, src, description, crunchiness } = req.body;
    //we need the WHERE condition to specify what row of data we are updating and we need RETURNING * so we can shoe the user the result of the update
    const updateBiscuit = await db.query(
      `UPDATE biscuits SET biscuit_name = $1, src = $2, description = $3, crunchiness = $4 WHERE id = $5 RETURNING *`,
      [biscuit_name, src, description, crunchiness, id]
    );
    res.status(200).json(updateBiscuit.rows);
  } catch (error) {
    console.error(
      "This is a fatal error! How dramatic! You cannot update this biscuit",
      error
    );
    res.status(500).json({ success: false });
  }
});

//write a DELETE endpoint
// the delete endpoint is EXACTLY the same as the update, with a DELETE sql query instead
app.delete("/delete-biscuit/:id", async (req, res) => {
  //we need to make sure we target the specific row of data we want to delete
  // in the db, we have the id column
  //in the server, I can use params
  //the params will match the id value in the db
  //to represent dynamic params, we use : in the endpoint

  try {
    const { id } = req.params;
    // params {
    //     id: 1
    // }

    const deleteBiscuit = await db.query(
      `DELETE FROM biscuits WHERE id = $1 RETURNING *`,
      [id]
    );
    res.status(200).json(deleteBiscuit.rows);
  } catch (error) {
    console.error(
      "This is a fatal error! How dramatic! You cannot delete this biscuit",
      error
    );
    res.status(500).json({ success: false });
  }
});
