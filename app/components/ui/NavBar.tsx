"use client";

import React, { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle"; // Import DarkModeToggle component

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Navigation links
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 bg-opacity-100 dark:bg-opacity-100 text-gray-800 dark:text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <Link href="/" className="text-2xl font-bold text-[#008082] dark:text-[#00b3b3]">
          My Portfolio
        </Link>

        {/* Right-aligned elements container */}
        <div className="flex items-center ml-auto space-x-8">
          {/* Navbar Links (Hidden on mobile) */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-lg hover:text-[#008082] dark:hover:text-[#00b3b3] border-l-4 border-transparent hover:border-[#008082] dark:hover:border-[#00b3b3] pl-4"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="ml-4">
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu state
              className="text-xl text-[#008082] dark:text-[#00b3b3]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden until hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-lg text-[#008082] dark:text-[#00b3b3]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
