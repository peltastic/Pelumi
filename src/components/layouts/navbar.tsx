"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="px-10 py-8 flex justify-between items-center text-white-text-color">
      <Link href={"/"} className="hidden lg:block">
        <p className="font-exile  text-2xl font-normal">
          Pelumi
        </p>
      </Link>

      <ul className=" mx-auto lg:mx-0 flex items-center gap-x-4 border border-[#262626] bg-[#1A1A1A] pt-3 pb-2 rounded-full px-8">
        
        <li className="relative cursor-pointer group" onClick={() => scrollToSection("about")}>
          <p className="mb-1">About</p>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </li>
        <li className="relative cursor-pointer group">
          <p className="mb-1">Blog</p>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </li>
        <li className="relative cursor-pointer group" onClick={() => scrollToSection("projects")}>
          <p className="mb-1">Projects</p>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
