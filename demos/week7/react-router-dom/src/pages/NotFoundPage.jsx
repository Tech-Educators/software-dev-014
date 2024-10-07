import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h2>No Ice Screams here, sorry</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}
