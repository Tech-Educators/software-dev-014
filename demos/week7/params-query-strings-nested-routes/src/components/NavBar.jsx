//I am importing the Link component to add links for the user to easily navigate our website
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      {/* make sure the path in the to property matches the path in the Route
      component you are trying to connect to */}
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/icescreams">Ice Screams List</Link>
    </>
  );
}
