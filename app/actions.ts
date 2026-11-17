"use server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
function makeSessionToken() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error("SESSION_SECRET must be at least 32 characters.");
  return createHmac("sha256", secret).update("ladeeee-private-session").digest("hex");
}
export async function unlockWorld(formData: FormData) {
  const submitted = String(formData.get("password") ?? "");
  const expected = process.env.SITE_PASSWORD;
  if (!expected || !process.env.SESSION_SECRET) redirect("/?error=setup");
  const a = Buffer.from(submitted), b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) redirect("/?error=incorrect");
  const store = await cookies();
  store.set("ladeeee_session", makeSessionToken(), {
    httpOnly: true, secure: process.env.NODE_ENV === "production",
    sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30
  });
  redirect("/home");
}