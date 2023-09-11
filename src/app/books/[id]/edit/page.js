"use client";
import { BookForm } from "@/app/components/book/BookForm";
import { getBookDetail } from "@/app/fetching/book";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditBook(id) {
  const [book,setBook] = useState(null)
  // const router = useRouter();
  const router = useParams()
  console.log(router.id)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/books/${router.id}`,{
          method: "PUT",
        });
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[router.id])


  return (
    <div>
      <BookForm bookData={book} />
    </div>
  );
}
