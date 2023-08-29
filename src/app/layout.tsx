import "./globals.css";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoes shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>{children}</body>
    </html>
  );
}
