import { NextResponse } from "next/server";

export const middleware = (req) => {
  const token = req.cookies.token.get("accessToken");
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/books/:id"],
}