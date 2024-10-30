import { db } from "@/utils/dbConnection";

export async function GET() {
  const flowers = (await db.query(`SELECT * FROM flowers`)).rows;
  return new Response(JSON.stringify(flowers));
}
