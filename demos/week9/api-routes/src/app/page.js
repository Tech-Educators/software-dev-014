export default async function HomePage() {
  //I have fetched my own API endpoint
  const response = await fetch("http://localhost:3000/api/posts");
  const postsData = await response.json();
  return (
    <>
      <h1>Home Page</h1>
      {postsData.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <h2>{post.body}</h2>
        </div>
      ))}
    </>
  );
}
