"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-dark/50">
      <nav className="container-wide flex items-center justify-between h-16 lg:h-20" aria-label="Main">
        <Link
          href="#main-content"
          className="font-display text-xl lg:text-2xl text-charcoal hover:text-burgundy transition-colors"
        >
          Women in Wine
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm font-medium text-charcoal hover:text-burgundy transition-colors"
          >
            About
          </Link>
          <Link
            href="#partners"
            className="text-sm font-medium text-charcoal hover:text-burgundy transition-colors"
          >
            Featured Partners
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden p-2 text-charcoal"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-cream-dark/50 bg-cream py-4 px-5">
          <div className="flex flex-col gap-4">
            <Link
              href="#about"
              className="text-charcoal hover:text-burgundy"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#partners"
              className="text-charcoal hover:text-burgundy"
              onClick={() => setOpen(false)}
            >
              Featured Partners
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
