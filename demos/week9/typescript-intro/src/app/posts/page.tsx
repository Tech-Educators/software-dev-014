import { postType } from "@/lib/types";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <>
      <h1>Posts Page</h1>
      {data.map((post: postType) => (
        <div key={post.id}>
          {/* I added the optional chainin operator here in case there is an object with an empty title property */}
          <h1 className="text-sky-600">{post?.title}</h1>
          <h2 className="text-emerald-500 p-2">{post.body}</h2>
        </div>
      ))}
    </>
  );
}
