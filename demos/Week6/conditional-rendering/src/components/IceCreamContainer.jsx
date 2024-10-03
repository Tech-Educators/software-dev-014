import { useState } from "react";

export default function IceCreamContainer(props) {
  //STEP 1: we need to store the state of our elements
  const [showInfo, setShowInfo] = useState(false);

  //STEP 2: we need to add an event to our titles (h2)
  function handleClick() {
    //you can also have an if statement in here
    //this is the refactored version of it
    setShowInfo(!showInfo);
  }

  return (
    <>
      <h2 onClick={handleClick}>{props.name}</h2>
      {/* STEP 3: I need to conditionally render the flavour and price */}
      {/* a ternary operator --> a simplified if statement with two results */}
      {/* we cannot use if statements in the return of a function */}

      {showInfo ? (
        <>
          <p>{props.flavour}</p>
          <p>{props.price}</p>
        </>
      ) : null}

      {/* you can also use the && operator */}
      {/* {showInfo && (
        <>
          <p>{props.flavour}</p>
          <p>{props.price}</p>
        </>
      )} */}
    </>
  );
}
