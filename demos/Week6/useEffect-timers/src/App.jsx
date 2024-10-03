import { useEffect, useState } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);

  //I added my interval to useEffect to synchronise the timer with my component
  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log("A second has passed");
      //I need to add a parameter here, and hte argument will be hte timer state variable to avoid lag in the rendering of the current time
      setTimer(function (currentTimer) {
        return currentTimer + 1;
      });
    }, 1000);

    //I need to clear my interval to avoid rendering the time twice
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <h1>Timers in React</h1>
      <p>{timer}</p>
    </>
  );
}
