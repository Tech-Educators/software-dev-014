export default function IdPage({ params }) {
  console.log(params);
  return (
    <>
      <h1>Dynamic Route for the Id</h1>
      <p>You are looking at icescream number {params.id}</p>
    </>
  );
}
