//this route will get data from an external API
export async function GET() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return new Response(JSON.stringify(data));
}
