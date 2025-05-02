import type { Metadata } from "next";
import "./globals.css";
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
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
