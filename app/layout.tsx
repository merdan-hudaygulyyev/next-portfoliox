import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/general/Navbar";
import { Footer } from "@/components/general/Footer";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: {
    default: "Next-Portfolio",
    template: "%s | Merdan's",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1400px] w-full px-4 md:px-8 mx-auto pt-3 lg:pt-5 bg-gray-100">
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
