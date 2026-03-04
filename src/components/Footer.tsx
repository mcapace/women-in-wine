"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, defaultTransition } from "@/lib/motion";

const WS_LOGO_WHITE = `/images/${encodeURIComponent("WSlogoWhite-stroke (2) (4) (6).png")}`;

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="bg-charcoal text-cream py-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <motion.p
              variants={fadeInUp}
              transition={defaultTransition}
              className="font-display text-lg"
            >
              Women in Wine
            </motion.p>
            <motion.a
              href="https://www.winespectator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-6 w-24 block"
              aria-label="Wine Spectator"
              variants={fadeInUp}
              transition={defaultTransition}
              whileHover={{ opacity: 0.85 }}
            >
              <Image
                src={WS_LOGO_WHITE}
                alt=""
                fill
                className="object-contain object-left"
                sizes="96px"
              />
            </motion.a>
          </div>
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-sm text-cream/80"
          >
            A Wine Spectator program. Celebrating excellence in wine.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="mt-8 pt-8 border-t border-cream/20 text-center text-sm text-cream/70"
        >
          <p>© {new Date().getFullYear()} Wine Spectator. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
