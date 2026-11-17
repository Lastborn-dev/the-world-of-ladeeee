import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "The World of Ladeeee",
  description: "A little universe, made with love, just for Ladeeee.",
  applicationName: "The World of Ladeeee",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "Ladeeee" }
};
export const viewport: Viewport = { themeColor: "#f4eee4", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}