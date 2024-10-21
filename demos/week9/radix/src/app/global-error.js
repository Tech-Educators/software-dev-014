//this global error will apply when there is an error in any route in our app
"use client";
import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong globally!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
        <Link href="/">Go home</Link>
      </body>
    </html>
  );
}
