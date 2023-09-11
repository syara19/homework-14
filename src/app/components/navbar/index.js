// "use client"
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogoutButton from "../LogoutButton";

export default function Navbar() {
  const cookie = cookies();
  const accessToken = cookie.get("accessToken");
  console.log(accessToken)
  // const router = useRouter();
  // const handleLogout = async () => {
  //   try {
  //     await fetch("http://localhost:3000/api/logout", {
  //       method: "POST",
  //     });
  //     router.push("/");
  //     router.refresh();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">Home</Link>

        {accessToken ? (
          <div>
            <Link href={"/books/create"}>
            
                create book
             
            </Link>
            <LogoutButton/>

            {/* <button onClick={()=> cookies.delete("accessToken")} className="btn btn-ghost btn-sm">
              Logout
            </button> */}
          </div>
        ) : (
          <Link href={"/login"}><button
            className="btn btn-ghost btn-sm"
          >
            login
          </button></Link>
          
        )}
      </div>
    </nav>
  );
}
