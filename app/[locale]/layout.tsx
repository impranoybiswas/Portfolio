import React from "react";
import { Poppins } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Locale, routing } from "../i18n/routing";
import ScrollProvider from "../providers/ScrollProvider";
import LenisProvider from "../providers/LenisProvider";
import { Toaster } from "react-hot-toast";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { ColorProvider } from "../providers/ColorProvider";
import { ThemeProvider } from "next-themes";
import { FontProvider } from "../providers/FontProvider";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className="overflow-x-hidden">
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            storageKey="app-theme"
          >
            <ColorProvider>
              <LenisProvider>
                <FontProvider>
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
                </FontProvider>
              </LenisProvider>
            </ColorProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
