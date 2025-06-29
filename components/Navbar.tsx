
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 border-b border-gray-200 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - hidden until scrolled */}
        <Link
          href="/"
          className={clsx(
            "text-lg sm:text-xl font-bold text-gray-900 tracking-tight transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          Allen Manoj
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-gray-700 hover:text-blue-600 hover:underline underline-offset-4 font-medium transition-all"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={clsx(
            "md:hidden rounded p-2 transition-colors duration-300",
            menuOpen ? "text-blue-600 bg-gray-100" : "text-gray-800"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500",
          menuOpen
            ? "max-h-[500px] bg-white/90 backdrop-blur border-b border-gray-200 shadow"
            : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-4 py-4 px-6">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-base text-gray-800 hover:text-blue-600 font-medium transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};