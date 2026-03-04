"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, defaultTransition } from "@/lib/motion";
import { SocialIcons, WINE_SPECTATOR_SOCIAL } from "@/components/SocialIcons";

const WS_LOGO_WHITE = `/images/${encodeURIComponent("WSlogoWhite-stroke (2) (4) (6).png")}`;

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="bg-charcoal text-cream"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      <div className="container-wide py-10 lg:py-12 flex flex-col items-center justify-center gap-6 text-center">
        <motion.a
          href="https://www.winespectator.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-7 w-28 block transition-opacity hover:opacity-80"
          aria-label="Wine Spectator"
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <Image
            src={WS_LOGO_WHITE}
            alt="Wine Spectator"
            fill
            className="object-contain"
            sizes="112px"
          />
        </motion.a>
        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <SocialIcons links={WINE_SPECTATOR_SOCIAL} variant="dark" />
        </motion.div>
        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-sm text-cream/70"
        >
          © {new Date().getFullYear()} Wine Spectator. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
