
import React from "react";

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
  );
}

