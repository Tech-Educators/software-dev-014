//In Next.js 15, params is asynchronous. Therefore we need to make the component function async and await params

export default async function IdPage({ params }) {
  const myParams = await params;
  return (
    <>
      <h1>Post number {myParams.id}</h1>
    </>
  );
}
