import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req, res) {
  const data = await req.formData();
  const file = data.get("image");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const imagePath = path.join("images", file.name);
  const store = path.join(process.cwd(), "public", imagePath);

  await writeFile(store, buffer);
  try {
   const book = await prisma.book.create({
     data: {
       title: data.get("title"),
       author: data.get("author"),
       year: Number(data.get("year")),
       publisher: data.get("publisher"),
       pages: Number(data.get("pages")),
       image: imagePath
     }
   })
    return NextResponse.json(book, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error(`Error: ${error}`, 500);
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
