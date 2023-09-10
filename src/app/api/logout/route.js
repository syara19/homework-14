import { cookies } from "next/headers";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = cookies;
  const token = cookieStore("accessToken");

  const serialize = serialize("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 0,
  });
  const res = NextResponse.json({ accessToken });
  return new Response(JSON.stringify(res), {
    status: 200,
  });
}
