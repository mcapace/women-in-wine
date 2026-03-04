"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SocialIcons, WINE_SPECTATOR_SOCIAL } from "@/components/SocialIcons";

const WS_LOGO = `/images/${encodeURIComponent("WS logo (6).png")}`;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-[7.5rem] left-0 right-0 z-40 border-b border-cream-dark/50"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(247, 243, 240, 0.98)" : "rgba(247, 243, 240, 0.92)",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "saturate(180%) blur(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container-wide flex items-center justify-between h-16 lg:h-20" aria-label="Main">
        <Link
          href="https://www.winespectator.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-7 w-36 lg:h-8 lg:w-40 flex-shrink-0"
          aria-label="Wine Spectator – Home"
        >
          <Image
            src={WS_LOGO}
            alt="Wine Spectator"
            fill
            className="object-contain object-left"
            sizes="160px"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-sm font-medium text-charcoal hover:text-burgundy transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#partners"
            className="text-sm font-medium text-charcoal hover:text-burgundy transition-colors duration-300"
          >
            Featured Partners
          </Link>
          <SocialIcons links={WINE_SPECTATOR_SOCIAL} variant="light" className="ml-2 border-l border-cream-dark/60 pl-6" />
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
              className="text-charcoal hover:text-burgundy transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="#partners"
              className="text-charcoal hover:text-burgundy transition-colors"
              onClick={() => setOpen(false)}
            >
              Featured Partners
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
