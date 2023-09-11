"use client";

import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../fetching/book";
import Books from "./book/Books";
import { useRouter } from "next/navigation";
import useAuthStore from "@/lib/store";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isLogin } = useAuthStore();
  console.log(isLogin);

  const fetchBooks = async () => {
    const data = await getBooks();
    setIsLoading(false);
    setBooks(data);
  };

  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      console.log(id);
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="w-96 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <Books {...book} />
              {isLogin && (
                <div className="flex justify-center space-x-5 p-4">
                  <button
                    onClick={() => router.push(`/books/${book.id}/edit`)}
                    className="btn btn-sm  btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
