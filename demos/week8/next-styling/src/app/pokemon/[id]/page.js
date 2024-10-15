import Link from "next/link";

export async function generateMetadata({ params }) {
  const result = await fetch(`https://api.vercel.app/pokemon/${params.id}`);
  const data = await result.json();

  return {
    title: `This is ${data.name} - Pokédex number ${data.id}`,
    description: `I hope ${data.name} is your favourite`,
  };
}

export default async function IdPage({ params }) {
  const result = await fetch(`https://api.vercel.app/pokemon/${params.id}`);
  const data = await result.json();

  return (
    <div className="p-20">
      <h1>{data.name}</h1>
      <p className="hover:bg-sky-700 text-5xl bg-violet-950 text-lime-600">
        {data.type[0]}
      </p>
      {/* you could have some conditional rendering to show a second type if the pokemon as it */}
      <Link
        href={`/pokemon`}
        className="hover:bg-sky-700 text-5xl bg-violet-950 text-lime-600"
      >
        Go back
      </Link>
    </div>
  );
}
