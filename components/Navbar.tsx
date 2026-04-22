"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import clsx from "clsx";

type NavItem = { label: string; href: `#${string}` };

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 border-b border-gray-200 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        role="navigation"
        aria-label="Main"
      >
        <Link
          href="/"
          className={clsx(
            "text-lg sm:text-xl font-bold tracking-tight transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded",
            scrolled ? "opacity-100 text-gray-900" : "opacity-0 pointer-events-none"
          )}
        >
          Allen Manoj
        </Link>

        <ul className="hidden items-center space-x-6 md:flex">
          {navItems.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={href}>
                <Link
                  href={href}
                  scroll
                  className={clsx(
                    "text-base font-medium transition-all underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded",
                    isActive
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-600 hover:underline"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className={clsx(
            "rounded p-2 transition-colors duration-300 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
            menuOpen ? "text-blue-700 bg-gray-100" : "text-gray-800"
          )}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          menuOpen
            ? "max-h-[480px] opacity-100 bg-white/90 backdrop-blur border-b border-gray-200 shadow"
            : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                scroll
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium text-gray-800 transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
