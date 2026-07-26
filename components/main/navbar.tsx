'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden lg:flex font-bold ml-[10px] text-gray-300 whitespace-nowrap">Shubham Ranjan</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex h-full flex-row items-center justify-center">
          <div className="flex items-center justify-center gap-4 lg:gap-6 h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-5 py-2 rounded-full text-gray-200 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer whitespace-nowrap hover:text-[rgb(112,66,248)] transition duration-200"
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer whitespace-nowrap hover:text-[rgb(112,66,248)] transition duration-200"
            >
              Source Code
            </Link>
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-[#7042f8] transition duration-200" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-lg p-6 flex flex-col items-center text-gray-300 md:hidden border-b border-[#7042f88b]">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 text-base">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-7 w-7 text-white hover:text-[#7042f8] transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};