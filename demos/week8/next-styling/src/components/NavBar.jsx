import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <Link href="/">Home</Link>

      <Link href="/pokemon">Pokemon List</Link>
    </>
  );
}
