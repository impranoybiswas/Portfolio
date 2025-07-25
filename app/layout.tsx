import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranoy Biswas Bappa",
  description: "Pranoy's Portfolio Website",
  keywords: ["Pranoy Biswas", "Pranoy Biswas Bappa", "Portfolio", "Next.js", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}>
        {children}
      </body>
    </html>
  );
}
