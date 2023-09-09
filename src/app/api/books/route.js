import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req, res) {
  try {
    const formData = await req.formData();

    if (!formData) {
      return NextResponse.error("Invalid form data in the request.", 400);
    }

    const title = formData.get("title");
    const author = formData.get("author");
    const year = Number(formData.get("year"));
    const publisher = formData.get("publisher");
    const pages = Number(formData.get("pages"));
    const image = formData.get("image");

    if (
      !title ||
      !author ||
      isNaN(year) ||
      !publisher ||
      isNaN(pages) ||
      !image
    ) {
      return NextResponse.error("Invalid or missing data in the request.", 400);
    }

    const file = formData.get("image");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const imagePath = path.join("images", file.name);
    const storeFile = path.join(process.cwd(), "uploads", imagePath);
    await writeFile(storeFile, buffer);

    const book = await prisma.book.create({
      data: {
        title,
        author,
        year,
        publisher,
        pages,
        image: imagePath,
      },
    });

    console.log(book);
    return NextResponse.json(book, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error(`Error: ${error.message}`, 500);
  }
}

export async function GET(req, res) {
  try {
    const books = await prisma.book.findMany();
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    return NextResponse.error(`Error: ${error.message}`, 500);
  }
}
