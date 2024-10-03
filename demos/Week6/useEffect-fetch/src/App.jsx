import { useEffect, useState } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      //fetch data async await
      const response = await fetch("https://dummyjson.com/recipes");
      //turn the data into json
      const data = await response.json();
      //data wrangling
      const wrangledData = data.recipes;
      //I am going to update the value of recipes to be our wrangled data

      setRecipes([wrangledData]);
    }
    fetchRecipes();
  }, []);
  //the dependency array controls when the useEffect effect triggers after mounting the component.
  //if there is a item in the dependency array, whenever the item's value updates, the effect will trigger again.
  //If you want your effect to trigger once, you leave the dependency array empty.
  //If you forget your dependency array, the effect will trigger forever
  return (
    <>
      {recipes.map((wrangledData) =>
        wrangledData.map((recipe) => (
          <div key={recipe.id}>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <h2>{recipe.cuisine}</h2>
          </div>
        ))
      )}
    </>
  );
}
