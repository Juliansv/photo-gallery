import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Matias photo gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="no-scrollbar flex min-h-screen md:h-screen flex-col">
        <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between bg-[#1C1C1C] p-4 text-center backdrop-blur ">
          <Link href={`/`} className="text-2xl font-bold hover:text-slate-300">
            Matias Lucero
          </Link>
          <Navbar />
        </header>
        <main className="min-h-[87 vh] flex-1 md:overflow-auto">
          {children}
        </main>
        <footer className="sticky bottom-0 mt-4 w-full bg-[#1C1C1C] p-2 text-center font-bold md:mt-0">
          Made by{" "}
          <Link
            href={"https://julisv.com"}
            className="underline hover:text-red-600"
          >
            Julio
          </Link>
        </footer>
      </body>
    </html>
  );
}
