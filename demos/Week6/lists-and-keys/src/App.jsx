import "./App.css";
import data from "./lib/data.json";

export default function App() {
  return (
    <>
      <h1>Posts</h1>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}
