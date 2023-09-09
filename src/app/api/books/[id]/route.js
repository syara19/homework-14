import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const data = await req.formData();

  try {
    const book = await prisma.book.update({
      where: {
        id,
      },
      data: {
        title: data.get("title"),
        author: data.get("author"),
        year: Number(data.get("year")),
        publisher: data.get("publisher"),
        pages: Number(data.get("pages")),
      },
    });
    return NextResponse.json(book, { status: 200 });
  } catch (error) {
    return NextResponse.error(`Error: ${error.message}`, 500);
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    const book = await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(book, { status: 200 });
  } catch (error) {
    return NextResponse.error(`Error: ${error.message}`, 500);
  }
}
