import { Link, Outlet } from "react-router-dom";

//the Outlet component will make sure that the child nested route is rendered in here
export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/about/history">Check out the history of the shop</Link>
      <h2>
        Manny uses a secret recipe to create his terrifying ice screams, so
        there&apos;s no much to show here.
      </h2>
      <Outlet />
    </>
  );
}
