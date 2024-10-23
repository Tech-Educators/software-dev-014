//As a user, I want to delete an individual coaster
//As a dev, I want to implement a delete function using the coaster id and a hidden form
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  //server action
  async function handleDelete() {
    "use server";

    //sql query to delete data with a condition
    await db.query(`DELETE FROM coasterrollers WHERE id = ${params.id} `);

    revalidatePath("/coasters");
    //when we delete this coaster, the params won't exist anymore, so we are redirecting the user to the coasters page
    redirect("/coasters");
  }

  //we need to get the id from the db if you want to have a pre-filled hidden input (not necessary)
  //   const oneCoaster = (
  //     await db.query(`SELECT id FROM coasterrollers WHERE id = ${params.id} `)
  //   ).rows[0];

  return (
    <>
      <h1>With great power comes great responsibity</h1>
      <h2>Which coaster have you chosen to get the chop?</h2>
      {/* we are going to use a pre-filled form in here, just with the id */}
      <form action={handleDelete}>
        {/* <input name="id" id="id" defaultValue={oneCoaster} type="hidden" /> */}
        <button type="submit" className="text-red-500 border-2 border-red-500">
          Are you super sure you want to delete this coaster?
        </button>
      </form>
    </>
  );
}
