"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, defaultTransition } from "@/lib/motion";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="about-heading"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="container-narrow">
        <motion.h2
          id="about-heading"
          variants={fadeInUp}
          transition={defaultTransition}
          className="font-display text-3xl sm:text-4xl text-charcoal mb-8 tracking-tight"
        >
          About the Program
        </motion.h2>
        <div className="prose prose-lg max-w-none text-slate">
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="leading-relaxed"
          >
            With the influence of women in wine expanding each year, those in key roles often feel compelled to share the knowledge they&apos;ve learned on their path to success—and in turn, inspire others. Visibility and mentorship matter: when the next generation can see leaders who look like them, they can imagine the path. Women in Wine spotlights those leaders, winemakers, and visionaries who are redefining the industry.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="leading-relaxed mt-4"
          >
            Through storytelling and partnership, we elevate the voices and contributions of women at every stage of the wine journey. Our featured partners represent excellence in craft, stewardship of the land, and a commitment to quality that resonates with Wine Spectator&apos;s values. Explore their stories and discover the people behind the bottles.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
