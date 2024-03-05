"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <Link href={`/`} className="hover:text-slate-400">
        Home
      </Link>
      <Link href={`/`} className="hover:text-slate-400">
        Gallery
      </Link>
      <Link href={`/`} className="hover:text-slate-400">
        About
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="flex justify-center hover:text-slate-300 md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden w-full justify-around md:flex ">
          <NavLinks />
        </div>
      </nav>
      {isOpen && (
        <div
          onClick={toggleNavbar}
          className="absolute left-0 top-full flex h-60 w-full flex-col justify-evenly bg-[#1C1C1C] font-semibold"
        >
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
