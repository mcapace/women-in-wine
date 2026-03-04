"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, defaultTransition } from "@/lib/motion";
import { SocialIcons, WINE_SPECTATOR_SOCIAL } from "@/components/SocialIcons";

const WS_LOGO_WHITE = `/images/${encodeURIComponent("WSlogoWhite-stroke (2) (4) (6).png")}`;

const FOOTER_LINKS = [
  { label: "Back to top", href: "#top" },
  { label: "Privacy Policy", href: "https://www.winespectator.com/pages/privacy-policy" },
  { label: "Terms of Use", href: "https://www.winespectator.com/pages/terms-of-use" },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="bg-charcoal text-cream"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <div className="container-wide py-12 lg:py-16">
        {/* Primary row: brand, social, tagline */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            className="flex items-center gap-4"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <p className="font-display text-lg">Women in Wine</p>
            <a
              href="https://www.winespectator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-6 w-24 block transition-opacity hover:opacity-80"
              aria-label="Wine Spectator"
            >
              <Image
                src={WS_LOGO_WHITE}
                alt=""
                fill
                className="object-contain object-left"
                sizes="96px"
              />
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-2"
            variants={fadeInUp}
            transition={defaultTransition}
          >
            <span className="text-xs uppercase tracking-wider text-cream/60">Follow Wine Spectator</span>
            <SocialIcons links={WINE_SPECTATOR_SOCIAL} variant="dark" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-sm text-cream/80 text-center lg:text-right max-w-xs"
          >
            A Wine Spectator program. Celebrating excellence in wine.
          </motion.p>
        </div>

        {/* Sponsored partnership line */}
        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="mt-10 text-center text-xs uppercase tracking-wider text-cream/50"
        >
          Sponsored Partnership: Cline Cellars · O&apos;Neill Vintners & Distillers
        </motion.p>

        {/* Links + copyright */}
        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="mt-8 pt-8 border-t border-cream/20 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-cream/70"
        >
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" aria-label="Footer">
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-cream transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
          <span className="hidden sm:inline text-cream/40" aria-hidden>|</span>
          <p>© {new Date().getFullYear()} Wine Spectator. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
