import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const authExceptPath = [
  "/",
  "/api",
  "/content/home",
  "/content/blogs",
  "/content/rewards",
  "/content/glossary",
  "/content/documents",
  "/content/help-center",
  "/forgot-password",
  "/login-scan-QR",
  "/register",
  "/signin",
  "/_next",
  "/images",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPathExempt = authExceptPath.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );

  if (isPathExempt) {
    return NextResponse.next();
  }

  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}
