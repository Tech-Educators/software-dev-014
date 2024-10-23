export async function GET() {
  const response = db.query(`SELECT * FROM users`);
  return new Response(JSON.stringify(response));
}
