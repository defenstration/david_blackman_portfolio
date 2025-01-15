import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Blackman Portfolio",
  description: "My portfolio, including development, manufacturing, and management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased grid w-full h-auto min-h-dvh`}>
        <Header />
        <main>
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
