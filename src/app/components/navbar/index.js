"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
   const router = useRouter()
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">Home</Link>
        <div>
          <button className="btn btn-ghost btn-sm" onClick={()=> router.push("/login")} >login</button>
          <button className="btn btn-ghost btn-sm" >
            Logout
          </button >
          <button className="btn btn-ghost btn-sm" onClick={()=> router.push("/books/create")}> create book</button>
        </div>
      </div>
    </nav>
  );
}
