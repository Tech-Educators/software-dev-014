import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function AddFlowerPage() {
  async function handleSubmit(formValues) {
    "use server";
    const formData = {
      flower_name: formValues.get("flower_name"),
      flower_location: formValues.get("flower_location"),
      flower_image: formValues.get("flower_image"),
    };

    console.log(formData);

    await db.query(
      `INSERT INTO flowers (flower_name, flower_location, flower_image) VALUES($1, $2, $3)`,
      [formData.flower_name, formData.flower_location, formData.flower_image]
    );

    revalidatePath("/");
    revalidatePath("/client-flowers");
    redirect("/");
  }
  return (
    <div>
      <form action={handleSubmit} className="flex flex-col items-center p-4">
        <label htmlFor="flower_name">Flower Name</label>
        <input name="flower_name" type="text" />
        <label htmlFor="flower_location">Flower Location</label>
        <input name="flower_location" type="text" />
        <label htmlFor="flower_image">Flower Image</label>
        <input name="flower_image" type="text" />
        <button type="submit" className="bg-blue-950 text-yellow-200 m-2">
          Submit your flower
        </button>
      </form>
    </div>
  );
}
