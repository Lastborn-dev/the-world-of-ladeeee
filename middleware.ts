import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
function expectedToken() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) return null;
  return createHmac("sha256", secret).update("ladeeee-private-session").digest("hex");
}
export function middleware(request: NextRequest) {
  const expected = expectedToken();
  const supplied = request.cookies.get("ladeeee_session")?.value ?? "";
  const valid = !!expected && Buffer.byteLength(supplied) === Buffer.byteLength(expected)
    && timingSafeEqual(Buffer.from(supplied), Buffer.from(expected));
  if (!valid) return NextResponse.redirect(new URL("/", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/home/:path*"] };