import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend"
});

export const metadata: Metadata = {
  title: "setMySpace",
  description: "Country, state, and city selector"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.variable}>{children}</body>
    </html>
  );
}
