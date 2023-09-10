"use client";

import { create } from "@/app/fetching/book";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function BookForm({ bookData }) {
  const [selectImage, setSelectImage] = useState(null);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectImage) {
      alert("pls select img");
    }
    const formData = new FormData(e.target);
    if (bookData) {
      try {
        await editBook(
          bookData.id,
          formData.get("title"),
          formData.get("author"),
          Number(formData.get("pages")),
          Number(formData.get("year"))
        );
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      const book = await create(formData);
      console.log(book);
      router.push("/")
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
    // <div>
    //   <h1>method</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>title</label>
    //     <input type="text" name="title" />
    //     <label>author</label>
    //     <input type="text" name="author" />
    //     <label>publisher</label>
    //     <input type="text" name="publisher" />
    //     <label>year</label>
    //     <input type="text" name="year" />
    //     <label>pages</label>
    //     <input type="text" name="pages" />
    //     <label>image</label>
    //     <input
    //       type="file"
    //       onChange={(e) => setSelectImage(e.target.files[0])}
    //       name="image"
    //     />
    //     <button type="submit">save</button>
    //   </form>
    // </div>
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4">Book Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded-md p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="author" className="font-medium">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="border rounded-md p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="publisher" className="font-medium">
              Publisher
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              className="border rounded-md p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="year" className="font-medium">
              Year
            </label>
            <input
              type="text"
              id="year"
              name="year"
              className="border rounded-md p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="pages" className="font-medium">
              Pages
            </label>
            <input
              type="text"
              id="pages"
              name="pages"
              className="border rounded-md p-2"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="image" className="font-medium">
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
