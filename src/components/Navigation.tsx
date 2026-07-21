"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/interests", label: "Interests" },
  { href: "/seoul", label: "Seoul Guide" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight"
          onClick={() => setIsMenuOpen(false)}
        >
          Hanshin<span className="text-accent">.</span>
        </Link>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-md border border-card-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <div className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === link.href
                  ? "text-accent font-medium"
                  : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-card-border bg-background px-6 py-3 sm:hidden"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-card-bg hover:text-accent ${
                  pathname === link.href
                    ? "bg-card-bg font-medium text-accent"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
