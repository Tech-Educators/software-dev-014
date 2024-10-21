//my error page has to be a client component
"use client";
import Link from "next/link";
export default function ErrorPage({ error, reset }) {
  return (
    <>
      <h2>We are doing some maintenance here. Mind the test dummies</h2>
      <p>{error.message}</p>
      {/* we are going to give the user an option to leave this page */}
      {/* this reset should re-try to load the page again. If the error persists, it will throw an error again */}
      <button onClick={() => reset()}>Try loading the page again</button>
      <br />
      <Link href="/">Go home</Link>
    </>
  );
}
