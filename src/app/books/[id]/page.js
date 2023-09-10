import { getBookDetail } from "@/app/fetching/book";
import Link from "next/link";

export default async function Book({ params }) {
  const { id } = params;
  const book = await getBookDetail(+id);


  console.log(book);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto max-w-screen-xl p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="aspect-w-16 aspect-h-20">
            <img
              src={`http://localhost:3000/${book.image}`}
              alt="Book Cover"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-semibold">{book.title}</h1>
            <p className="text-gray-500 text-sm">{book.author}</p>
            <p className="text-gray-500 text-sm">Publisher: {book.publisher}</p>
            <p className="text-gray-500 text-sm">Pages: {book.pages}</p>
            <p className="text-gray-500 text-sm">Year: {book.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
