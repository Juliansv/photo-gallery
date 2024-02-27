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
      <body>
        <header className="sticky top-0 flex flex-wrap z-10 bg-slate-800 p-4 backdrop-blur justify-between text-center items-center ">
          <Link href={`/`} className="text-2xl font-bold">Mati Lucero</Link>
          <Navbar />
        </header>
        <main className="min-h-screen ">{children}</main>
        <footer className="sticky bottom-0 mt-4 w-full bg-slate-800 p-2 text-center font-bold">
          Made by <Link href={"https://julisv.com"} className="underline">Julio</Link>
        </footer>
      </body>
    </html>
  );
}
