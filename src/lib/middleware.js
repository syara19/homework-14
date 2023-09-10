import { NextResponse } from "next/server";


export function middleware(req){
    const loginPath = ["/login","/api/login"];

    if(loginPath.some((v)=> v === req.nextUrl.pathname)){
        return NextResponse.next();
    }else{
        const accessToken = req.cookies.token.get("accessToken");
        if(!accessToken){
            return NextResponse.redirect(new URL("/login", req.url));
        }
        return NextResponse.next()
    }
}

export const config = {
    matcher: ["/books/create"]
}