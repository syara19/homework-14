import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const foundUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!foundUser) {
      return new Response("User not found", {
        status: 404,
      });
    }

    const isValid = bcrypt.compareSync(password, foundUser.password);

    if (!isValid) {
      return new Response("Invalid password/email", {
        status: 401,
      });
    }
    const accessToken = jwt.sign(
      {
        id: foundUser.id,
        email: foundUser.email,
      },
      process.env.JWT_SECRET
    );

    cookies().set({
      name: "access_token",
      value: accessToken,
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(
      {
        id: foundUser.id,
        email: foundUser.email,
        accessToken,
      },
      { status: 200 }
    );
  } catch (error) {
    throw new Error(error);
  }
}
