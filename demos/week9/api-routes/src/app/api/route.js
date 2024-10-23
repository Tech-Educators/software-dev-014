//This is a server-exclusive route (endpoint)

//this is my root route

//Express endpoint
// app.get("/", (req, res) => {
//   res.json({ message: "This is the root route. How roude!" });
// });

//Next.js endpoint
export async function GET() {
  return new Response("This is the root route. How roude!");
}
