"use client";

import { useEffect, useState } from "react";
import { getBooks } from "../fetching/book";
import Books from "./book/Books";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async () => {
    const data = await getBooks();
    // setIsLoading(false);
    setBooks(data);
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
            key={`${book.id} ${book.title}`}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <Books {...book} />
          </div>
        ))}
      </div>
    </div>
  );
}
