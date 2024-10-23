//I want a not-found page for a dynamic route
import { db } from "@/utils/dbConnection";
import { notFound } from "next/navigation";
import Link from "next/link";
export default async function IdPage({ params }) {
  //get an individual coaster and wrangle data
  const oneCoaster = (
    await db.query(`SELECT * FROM coasterrollers WHERE id = ${params.id}`)
  ).rows;
  console.log(oneCoaster);
  //we will show the not-found page when the table is empty or the id we are trying to retrieve does not exist
  if (oneCoaster.length === 0) {
    notFound();
  }

  return (
    <>
      <h1>This is dynamic, baby</h1>
      <h2>{oneCoaster[0].coaster_name}</h2>
      <p>{oneCoaster[0].location}</p>
      <p>{oneCoaster[0].height}</p>
      <Link
        href={`/coasters/${params.id}/edit`}
        className="text-amber-600 border-2 border-emerald-700"
      >
        Edit this coaster
      </Link>
      <br />
      <Link
        href={`/coasters/${params.id}/delete`}
        className="text-red-600 border-2 border-yellow-300"
      >
        Delete this coaster
      </Link>
    </>
  );
}
