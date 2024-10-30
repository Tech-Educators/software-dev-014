import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-evenly">
      <Link href={"/"} className="bg-blue-950 text-yellow-200 m-1">
        Home
      </Link>
      <Link href={"/add-flower"} className="bg-blue-950 text-yellow-200 m-1">
        Add a new flower
      </Link>
      <Link
        href={"/client-flowers"}
        className="bg-blue-950 text-yellow-200 m-1"
      >
        Flowers in the client?!
      </Link>
      <Link href={"/api/flowers"} className="bg-blue-950 text-yellow-200 m-1">
        Look into the server abyss? 👻
      </Link>
    </nav>
  );
}
