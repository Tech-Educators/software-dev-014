export async function fetchData() {
  const response = await fetch("http://localhost:3000/api/posts");
  const postsData = await response.json();
  return postsData;
}
