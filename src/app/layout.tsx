// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page-level metadata
export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "A Next.js + TypeScript + Tailwind dashboard example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased bg-gray-100">
        {children}
      </body>
    </html>
  );
}
