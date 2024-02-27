"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <a href={`/`}>Home</a>
      <a href={`/`}>Gallery</a>
      <a href={`/`}>About</a>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="flex justify-center md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full">
            <NavLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
