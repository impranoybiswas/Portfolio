import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollProvider from "./providers/ScrollProvider";
import LenisProvider from "./providers/LenisProvider";
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
    "Frontend Developer",
    "Full Stack Developer",
  ],
};

/**
 * Root Layout
 * 
 * The top-level layout wrapper for the application.
 * - Sets up global fonts (Poppins).
 * - Provides global contexts: ThemeProvider, LenisProvider, ScrollProvider.
 * - Includes Navbar, Footer, and Toast notifications.
 * 
 * @param {Readonly<{ children: React.ReactNode }>} props - The component props
 * @returns {JSX.Element} The root html structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          <LenisProvider>
            <ScrollProvider>
              <Toaster
                toastOptions={{ duration: 3000 }}
                gutter={10}
                position="top-center"
                reverseOrder={false}
              />
              <Navbar />
              {children}
              <Footer />
            </ScrollProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
