//this is a server component by default
import Link from "next/link";
export default function NavBar() {
  //the task we want to perform is to set up navigatin with Links
  //this task can be performed in a server component, so I will prioritise the server
  return (
    <>
      <h1>NavBar</h1>
      <Link href="/">Homepage Link</Link>
    </>
  );
}
