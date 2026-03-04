"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, defaultTransition } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[85vh] flex flex-col justify-center pt-36 pb-16 px-5 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src="/images/AdobeStock_451032833.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-charcoal/50 grain" aria-hidden />
      </div>
      <motion.div
        className="container-narrow text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="font-accent text-gold-light uppercase tracking-[0.25em] text-sm mb-4"
        >
          Wine Spectator Program
        </motion.p>
        <motion.h1
          id="hero-heading"
          variants={fadeInUp}
          transition={defaultTransition}
          className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-sm tracking-tight"
        >
          Women in Wine
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
          className="font-accent text-xl sm:text-2xl text-cream max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
        >
          Women who influence the wine world—from vineyard to cellar to table. Celebrating the leaders and visionaries shaping what comes next.
        </motion.p>
      </motion.div>
    </section>
  );
}
