// "use client";

import { deleteBook, getBookDetail } from "@/app/fetching/book";
import Link from "next/link";
// import { useRouter } from "next/navigationr";
// import { useState } from "react";

export default  function Book({ params }) {
  const { id } = params;
//   const route = useRouter();
  const book =  getBookDetail(+id);
//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  console.log(book);
  return (
    <div className="card text-primary-content">
      <img
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
        <button className="btn" >
          Delete
        </button>
        {/* {isDeleteModalOpen && (
          <div className="modal" id="my_modal_2">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Are you sure to delete the book?
              </h3>
              <p className="py-4">Press ESC key or click outside to close</p>
              <div className="modal-action">
                <button onClick={handleDeleteConfirm}>Delete</button>
                <button onClick={() => setDeleteModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

