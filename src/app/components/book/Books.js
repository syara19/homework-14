"use client";
import { deleteBook } from "@/app/fetching/book";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Books({ id, title, author, image, year }) {
  const router = useRouter()
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteBook(id);
      // console.log("delete success", id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link href={`/books/${id}`}>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
          <figure>
            <img
              src={`http://localhost:3000/${image}`}
              alt="img"
              className="w-full h-48 object-fill"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              {title} ({year})
            </h2>
            <p className="text-sm text-gray-500">{author}</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-center space-x-5">
        <button onClick={()=>router.push(`/books/${id}/edit`)}>edit</button>
        <button onClick={() => deleteBook(id)}>delete</button>
      </div>
    </div>
  );
}
