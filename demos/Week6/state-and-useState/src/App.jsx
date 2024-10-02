import "./App.css";
//I just want ONE element from the react folder, so I destructured it
import { useState } from "react";
import Footer from "./components/Footer";

//we write default because each component will only export one function: the component function
export default function App() {
  //write my code
  //we cannot do global variables in React like this
  //we need to use State!

  //I only want two elements from useState, so I destructured them
  const [counter, setCounter] = useState(0);

  //event handler
  function handleCounter() {
    setCounter(counter + 1);
  }

  //the component function will always return the DOM elements I want to render on the page
  return (
    <>
      <h1>Hello</h1>
      {/* we add the event listener directly onto the DOM element */}
      {/* events in React start with on... followed by the event name */}
      <button onClick={handleCounter}>Click for counting</button>
      <p>{counter}</p>

      <Footer counter={counter} age={10} />
    </>
  );
}
