import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">Home</Link>
        <div>
          <Link href="/login">login</Link>
          <button >
            Logout
          </button>
          <Link href="/books/create"> create book</Link>
        </div>
      </div>
    </nav>
  );
}
