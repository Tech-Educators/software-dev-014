import Link from "next/link";
//we are importing the whole CSS module for this page
//you can choose any name that you want
import pokemonStyles from "@/app/pokemon/pokemon.module.css";

export const metadata = {
  title: "Pokémon First Generation",
  description: "A list of the best generation",
};

export default async function PokemonPage() {
  const result = await fetch("https://api.vercel.app/pokemon");
  const data = await result.json();

  return (
    // to target specific class names, we add the name of our module and the name of the class with dot notation
    <div className={pokemonStyles.body}>
      <h1 className={pokemonStyles.heading}>List of Pokémon</h1>
      {data.map((pokemon) => (
        <div key={pokemon.id}>
          <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
        </div>
      ))}
    </div>
  );
}
