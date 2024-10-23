//usually you don't have a separate route for an error
//we are using this page for testing our custom error page

export default function BrokenCoasterPage() {
  //we are going to simulate an error
  throw new Error("Ooopppppsssss, I borke");
  return (
    <>
      <h1>Broken Coaster</h1>
      <p>
        You will never see this message in the browser. Your secrets are safe. I
        steal coaster rollers
      </p>
    </>
  );
}
