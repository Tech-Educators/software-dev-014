import { db } from "@/utils/dbConnection";
export async function POST(req) {
  req.body;
  const newData = await db.query(`INSERT INTO posts name = $1, post = $2`, [
    req.body.name,
    req.body.post,
  ]);
}

//some uses:
//creating new data in the database
//seed a database with test data
