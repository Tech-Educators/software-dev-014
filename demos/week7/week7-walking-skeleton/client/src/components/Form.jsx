export default function Form() {
  //we need state to save the formValues
  //! we do not need useEffect in here
  //a submit handler
  //   function handleSubmit(){
  //something to prevent the default behaviour of the form
  //something to fetch the POST endpoint in the server
  //fetch("url", {
  //     method: "POST",
  // body: formValues,
  // headers: {
  //     "Content-Type": "application/json"
  // }
  // })
  //   }

  //we also need to handle change

  return (
    <>
      <h1>Lovely form</h1>
      <form>
        {/* we need to track the changes in the inputs of our form */}
        {/* we need to a submit event to send the data */}
      </form>
    </>
  );
}
