//by default, this is a server component. Our task is to add an event, so we need to use a client component.

//we need to use a client component in here because our task requires core React elements, which are client-side only.
"use client";

import { useState } from "react";

export default function Button() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
