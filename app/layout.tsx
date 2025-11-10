import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./custom.css";
import ScrollProvider from "./providers/ScrollProvider";
import { Toaster } from "react-hot-toast";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import ThemeProvider from "./providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pranoy Biswas Bappa",
  description: "Pranoy's Portfolio Website",
  keywords: [
    "Pranoy Biswas",
    "Pranoy Biswas Bappa",
    "Portfolio",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          <ScrollProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            {children}
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
