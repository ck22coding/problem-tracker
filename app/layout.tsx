import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Problem Tracker",
  description: "Catalog problems worth solving as potential startup ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
