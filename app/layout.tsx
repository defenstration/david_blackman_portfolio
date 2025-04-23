import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import CanvasBackground from "./components/CanvasBackground";



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
      <body className={`antialiased grid w-full h-auto min-h-dvh bg-transparent`}>
      <CanvasBackground />
        {/* <Header /> */}
        <main>
          {/* <Navbar /> */}
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
