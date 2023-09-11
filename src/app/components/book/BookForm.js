"use client";

import { create, editBook } from "@/app/fetching/book";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BookForm({ bookData }) {
  const [selectImage, setSelectImage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectImage) {
      alert("pls select img");
      return;
    }
    const formData = new FormData(e.target);
    console.log(bookData);
    if (bookData) {
      try {
        console.log("test");
        // await editBook(
        //   bookData.id,
        //   formData.get("title"),
        //   formData.get("author"),
        //   Number(formData.get("pages")),
        //   Number(formData.get("year"))
        // );
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      const book = await create(formData);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (bookData?.image) {
      setSelectImage(bookData?.image);
    }
  }, [bookData]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 w-full max-w-md">
        <h1 className="text-xl text-black font-semibold mb-4">Book Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="title" className="font-medium text-black">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded-md p-2"
              defaultValue={bookData?.title}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="author" className="text-black font-medium">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="border rounded-md p-2"
              defaultValue={bookData?.author}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="publisher" className="font-medium text-black">
              Publisher
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              className="border rounded-md p-2 text-black"
              defaultValue={bookData?.publisher}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="year" className="font-medium text-black">
              Year
            </label>
            <input
              type="text"
              id="year"
              name="year"
              className="border rounded-md p-2"
              defaultValue={bookData?.year}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="pages" className="font-medium text-black">
              Pages
            </label>
            <input
              type="text"
              id="pages"
              name="pages"
              className="border rounded-md p-2"
              defaultValue={bookData?.pages}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="image" className="font-medium text-black">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(e) => setSelectImage(e.target.files[0])}
              className="border p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
