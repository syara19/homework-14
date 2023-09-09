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
    const book = await prisma.book.delete({
      where: {
        id,
      },
    });
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  } catch (error) {
    console.log(error);
  }
};

export { getBooks, getBookDetail,deleteBook };
