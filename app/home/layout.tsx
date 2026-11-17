import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "nodejs";

function expectedSessionToken() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) return null;
  return createHmac("sha256", secret)
    .update("ladeeee-private-session")
    .digest("hex");
}

export default async function ProtectedHomeLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const expected = expectedSessionToken();
  const store = await cookies();
  const supplied = store.get("ladeeee_session")?.value ?? "";

  const valid = Boolean(expected)
    && Buffer.byteLength(supplied) === Buffer.byteLength(expected!)
    && timingSafeEqual(Buffer.from(supplied), Buffer.from(expected!));

  if (!valid) redirect("/");
  return children;
}
