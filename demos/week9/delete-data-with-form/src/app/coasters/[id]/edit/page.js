//As a user, I want to use a form to edit previously submitted data
//As a dev, I want to make the UX better by pre-filling the form
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  //I am getting one coaster to pre-fill my form
  const oneCoaster = await db.query(
    `SELECT * FROM coasterrollers WHERE id = ${params.id}`
  );
  const wrangledCoaster = oneCoaster.rows[0];
  console.log(wrangledCoaster);

  async function handleEdit(formValues) {
    //this is a server action --> server actions need to be async and "use server"
    "use server";
    //I need to store the form data from the inputs when the user adds the edits
    const formData = {
      coaster_name: formValues.get("coaster_name"),
      location: formValues.get("location"),
      height: formValues.get("height"),
    };
    //we need a sql query to update the table data
    //make sure you add WHERE, so you only edit one row of data
    await db.query(
      `UPDATE coasterrollers SET coaster_name = $1, location = $2, height = $3 WHERE id = ${params.id} RETURNING *`,
      [formData.coaster_name, formData.location, formData.height]
    );

    revalidatePath("/coasters");
    revalidatePath(`/coasters/${params.id}`);

    redirect(`/coasters/${params.id}`);
  }

  return (
    <>
      <h1>Edit your coaster!</h1>
      <h2>It borke!</h2>
      <form action={handleEdit} className="flex flex-col items-center">
        <label htmlFor="coaster_name">Edit the name of your coaster: </label>
        <input
          type="text"
          name="coaster_name"
          id="coaster_name"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
          //we can use the defaultValue property to pre-fill the form
          defaultValue={wrangledCoaster.coaster_name}
        />

        <label htmlFor="location">
          Edit the location where your coaster came from:
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
          defaultValue={wrangledCoaster.location}
        />

        <label htmlFor="height">How high is your coaster? Edit it</label>
        <input
          type="number"
          name="height"
          id="height"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
          min={1}
          step={1}
          defaultValue={wrangledCoaster.height}
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
