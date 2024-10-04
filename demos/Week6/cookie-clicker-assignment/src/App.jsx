//I am going to write all my notes in this component.
//You SHOULD divide my notes and tasks into different components whenever possible
import Header from "./components/Header";
import cookie from "../public/images/cookie.jpg";
import { useEffect } from "react";

export default function App() {
  //we need TWO states to store the cookies and cookiesPerSecond

  //we need an interval managed by useEffect
  useEffect(() => {
    const cookiesPerSecondInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cookiesPerSecond);
    }, 1000);

    return () => {
      clearInterval(cookiesPerSecondInterval);
    };
  }, [cookiesPerSecond]);

  //we need to give the upgrades some logic
  //the logic is that when the user buys an upgrade, the cookies number goes down, and the cookiesPerSecond number goes up
  return (
    <>
      <Header />

      <h1>Cookie Clicker</h1>
      {/* we need an event to listen to the click on this image */}
      <img src={cookie} alt="gooey chocolate cookie" />
      {/* we need to render the cookies number and the cookiesPerSecond number */}
      {/* we need to render our upgrades shop in here using map */}
    </>
  );
}
