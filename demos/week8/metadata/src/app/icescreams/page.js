import Link from "next/link";

export const metadata = {
  title: "Icescreams page",
  description: "Enjoy the view!",
};

export default async function IcescreamsPage() {
  // we can have async and await in the component function of a server component. How lucky!
  //In React, we needed useEffect to synchronise the fetch with the component lifecycle
  //we will use fetch to get the data from the API
  const response = await fetch("https://dummyjson.com/products");

  const data = await response.json();

  const wrangledData = data.products;
  console.log(wrangledData);

  return (
    <>
      <h1>Icescreams Page</h1>
      <ol>
        Icescreams List
        {/* we are going to use map to render the data onto the page */}
        {wrangledData.map((product) => (
          <div key={product.id}>
            <Link href={`/icescreams/${product.id}`}>{product.title}</Link>
          </div>
        ))}
      </ol>
    </>
  );
}
