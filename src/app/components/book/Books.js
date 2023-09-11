"use client";
import { deleteBook } from "@/app/fetching/book";
import Link from "next/link";

export default function Books({ id, title, author, image, year }) {
  return (
    <div>
      <Link href={`/books/${id}`}>
        <div>
          <figure>
            <img
              src={`http://localhost:3000/${image}`}
              alt="img"
              className="w-full h-48 object-fill"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-lg text-slate-800 font-bold mb-2">
              {title} ({year})
            </h2>
            <p className="text-sm text-gray-500">{author}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
