import "./App.css";
import IceCreamContainer from "./components/IceCreamContainer";
import iceCreamData from "./lib/iceCreamData.json";
export default function App() {
  return (
    <>
      <h1>Manny&apos;s Magical Ice Scream Shop</h1>
      <h2>I scream, you scream, we ALL scream for ice cream</h2>

      {
        // map is an array method! Your data needs to be stored in an array for it to work
        //the word return is implied here
        iceCreamData.map((icecream) => (
          <div key={icecream.id}>
            <IceCreamContainer
              id={icecream.id}
              name={icecream.name}
              flavour={icecream.flavour}
              price={icecream.price}
            />
          </div>
        ))
      }
    </>
  );
}
