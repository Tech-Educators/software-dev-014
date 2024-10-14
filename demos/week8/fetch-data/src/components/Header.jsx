import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>Header</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/icescreams">Icescreams</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
}
