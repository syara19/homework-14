"use client";

import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../fetching/book";
import Books from "./book/Books";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async () => {
    const data = await getBooks();
    // setIsLoading(false);
    setBooks(data);
  };

  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteBook(id);
      // console.log("delete success", id);
      fetchBooks()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setIsLoading(true);
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto  px-4 py-10">
      <div className="grid  lg:grid-cols-3 gap-16">
        {books.map((book) => (
          <div
            key={book.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <Books {...book} />
            <div className="flex justify-center space-x-5">
              <button onClick={() => router.push(`/books/${book.id}/edit`)}>
                edit
              </button>
              <button
                onClick={() => {
                  handleDelete(book.id);
                }}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
