import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Middleware only performs a quick presence check. The signed session
  // is cryptographically verified in the protected /home server layout.
  const hasSessionCookie = Boolean(request.cookies.get("ladeeee_session")?.value);
  if (!hasSessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/home/:path*"] };
