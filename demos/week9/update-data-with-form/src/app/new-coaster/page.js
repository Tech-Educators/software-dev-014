import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
//make sure redirect is from next/navigation
import { redirect } from "next/navigation";

export default function NewCoasterPage() {
  //we want to submit the form data to our database
  // you need to set up your database and conenction string first
  //we need to handle the submit action --> this is our server action

  async function handleSubmit(formValues) {
    //we need to make this action asynchronous
    //we need to specify this is a server action
    "use server";

    //get the form values from the inputs
    //I suggest you store your input values in one object
    //the properties of my formValues object are the name attributes in the inputs
    // the formData object is the template object to store the form formValues
    // the formValues parameter is a placeholder that the get method will fill in with the actual form values (the argument)
    const formData = {
      coaster_name: formValues.get("coaster_name"),
      location: formValues.get("location"),
      height: formValues.get("height"),
    };

    console.log(formData);

    //I cannot use the Object constructor here because it's only available in the client
    // const formData = new FormData(form);
    // const formValues = Object.fromEntries(formData);

    //we need to query the db to add the new form values to the table
    //we need to use db --> it's in my utils
    //we need await in the query, so the revalidatePath will happen after the form data has reached the database
    await db.query(
      `INSERT INTO coasterrollers (coaster_name, location, height)
        VALUES ($1, $2, $3)`,
      [formData.coaster_name, formData.location, formData.height]
    );

    //we are going to refresh the data in the /coasters page
    revalidatePath("/coasters");
    //we are going to redirect the user to the /coasters page
    redirect("/coasters");
  }

  return (
    <>
      <h1 className="text-amber-600">
        &quot;Add&quot; a new coaster roller to the family
      </h1>
      {/* in the form, I need an input for coaster_name,location, height */}
      {/* to submit this form, we cannot use an event because we are in the server */}
      {/* by adding attributes to our form we are ensuring the data is as valuable as possible --> form validation */}
      {/* no fill no thrill */}
      <form action={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="coaster_name">Write the name of your coaster: </label>
        <input
          type="text"
          name="coaster_name"
          id="coaster_name"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
        />

        <label htmlFor="location">
          Write the location where your coaster came from:
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
        />

        <label htmlFor="height">How high is your coaster?</label>
        <input
          type="number"
          name="height"
          id="height"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
          min={1}
          step={1}
        />
        {/* this button is not going to trigger an event, it's going to perform a server action */}
        <button
          type="submit"
          className="border-rose-400 border-4 bg-yellow-400 text-rose-400 p-2 m-4"
        >
          Submit coaster
        </button>
      </form>
    </>
  );
}
