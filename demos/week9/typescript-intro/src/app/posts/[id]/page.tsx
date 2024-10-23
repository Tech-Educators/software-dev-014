// import { paramsType } from "@/lib/types";
// { params }: paramsType}

export default async function IdPage({ params }: { params: { id: string } }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await result.json();
  return (
    <>
      <h1>Post number {params.id}</h1>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
