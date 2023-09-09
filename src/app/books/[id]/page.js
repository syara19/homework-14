// import { deleteBook, getBookDetail } from "@/app/fetching/book";
// import Link from "next/link";
// // import { useRouter } from "next/router";

// export default async  function Book({ params }) {
// const { id } = params;
// const book = await getBookDetail(+id);
// // const router = useRouter();

// const handleDelete = async () => {
//   try {
//     // Lakukan permintaan penghapusan buku dengan ID tertentu
//     await deleteBook(id);
//     // Redirect pengguna kembali ke halaman lain setelah penghapusan berhasil
//     // router.push("/"); // Ganti "/books" dengan rute yang sesuai
//   } catch (error) {
//     console.error("Gagal menghapus buku:", error);
//   }
// };

// console.log(book);
// return (
//   <div className="card text-primary-content">
//     <img
//       src={`http://localhost:3000/${book.image}`}
//       alt="img"
//       className="aspect-1/1 object-fill"
//     />
//     <div className="card-body">
//       <p>{book.title}</p>
//       <p>{book.author}</p>
//       <p>{book.publisher}</p>
//       <p>{book.pages}</p>
//       <p>{book.year}</p>
//     </div>
//     <div className="card-actions">
//       <Link href={`/books/${id}/edit`}>
//         <button className="btn btn-primary">Edit</button>
//       </Link>
//       <button onClick={handleDelete} className="btn" >
//         Delete
//       </button>

//   </div>
// </div>
// );
// }

"use client";

import { getBookDetail } from "@/app/fetching/book";
import { useEffect, useState } from "react";

export default function Book({ params }) {
  const {id}= params
  const [book, setBook] = useState(null);

useEffect(() => {
  const fetch=async()=>{
    try {
      const res = await getBookDetail(id)
      console.log("test")
      console.log(res)
      setBook(res)
    } catch (error) {
      console.log(error)
    }
  }
  fetch();
},[id])

console.log(book)

  return (
    <div className="card text-primary-content">
      {/* <img
        src={`http://localhost:3000/${book.image}`}
        alt="img"
        className="aspect-1/1 object-fill"
      />
      <div className="card-body">
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.publisher}</p>
        <p>{book.pages}</p>
        <p>{book.year}</p>
      </div>
      <div className="card-actions">
        <Link href={`/books/${id}/edit`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button onClick={handleDelete} className="btn">
          Delete
        </button>
      </div> */}
    </div>
  );
}
