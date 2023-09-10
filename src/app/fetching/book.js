import { instance } from "@/lib/axios";
import prisma from "@/lib/prisma";

const getBooks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/books", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getBookDetail = async (id) => {
  try {
    const book = await prisma.book.findUnique({
      where: {
        id,
      },
    });
    console.log(book, "<<book detail");
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  } catch (error) {
    console.log(error);
  }
};

const deleteBook = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/books/${id}`, {
      method: "DELETE",
    });
    console.log(res,"<<<query")
    return res;
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
};

const create = async (formData) => {
  try {
    const res = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      body: formData,
    });

    return res;
  
  } catch (error) {
    console.log(error)
  }
};

export { getBooks, getBookDetail, deleteBook, create };
