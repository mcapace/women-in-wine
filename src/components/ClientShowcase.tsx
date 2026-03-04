"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clients } from "@/data/clients";
import type { ClientSocial } from "@/data/clients";
import { SocialIcons } from "@/components/SocialIcons";
import type { SocialLink } from "@/components/SocialIcons";
import { fadeInUp, staggerContainer, defaultTransition, quickTransition } from "@/lib/motion";

function imageSrc(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

function partnerSocialLinks(social: ClientSocial): SocialLink[] {
  const out: SocialLink[] = [];
  if (social.website) out.push({ type: "website", href: social.website, label: "Website" });
  if (social.instagram) out.push({ type: "instagram", href: social.instagram, label: "Instagram" });
  if (social.facebook) out.push({ type: "facebook", href: social.facebook, label: "Facebook" });
  if (social.youtube) out.push({ type: "youtube", href: social.youtube, label: "YouTube" });
  if (social.linkedin) out.push({ type: "linkedin", href: social.linkedin, label: "LinkedIn" });
  return out;
}

function SocialLinks({ social }: { social: ClientSocial }) {
  const links = partnerSocialLinks(social);
  if (links.length === 0) return null;

  return (
    <div className="mt-4 pt-4 border-t border-cream-dark/50">
      <span className="text-xs uppercase tracking-wider text-slate block mb-2">Follow</span>
      <SocialIcons links={links} variant="light" />
    </div>
  );
}

export function ClientShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      id="partners"
      className="py-10 lg:py-16 bg-cream"
      aria-labelledby="partners-heading"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="container-wide">
        <motion.h2
          id="partners-heading"
          variants={fadeInUp}
          transition={defaultTransition}
          className="font-display text-3xl sm:text-4xl text-charcoal mb-3 text-center tracking-tight"
        >
          Featured Partners
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-slate text-center max-w-xl mx-auto mb-8"
        >
          Meet the women in key roles at the heart of our program—and the wineries they lead.
        </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {clients.map((client) => (
          <motion.article
            key={client.id}
            variants={fadeInUp}
            transition={defaultTransition}
            whileHover={{ y: -4, transition: quickTransition }}
            className="bg-white rounded-lg shadow-sm border border-cream-dark/50 overflow-hidden transition-shadow duration-300 hover:shadow-lg"
          >
            {client.image && (
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-cream-dark/30">
                <Image
                  src={imageSrc(client.image)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 576px"
                />
              </div>
            )}
            <div className="p-6 sm:p-8 lg:p-10">
                {client.logo && (
                  <div className="relative h-12 w-52 mb-6">
                    <Image
                      src={imageSrc(client.logo)}
                      alt=""
                      fill
                      className="object-contain object-left"
                      sizes="208px"
                    />
                  </div>
                )}
                <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-2 tracking-tight">
                  {client.name}
                </h3>
                <p className="font-accent text-lg text-gold-dark mb-4">{client.tagline}</p>
                {client.region && (
                  <p className="text-sm text-slate mb-4">{client.region}</p>
                )}
                <p className="text-slate leading-relaxed mb-6 whitespace-pre-line">
                  {client.description}
                </p>
                {client.highlights && client.highlights.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {client.highlights.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1 bg-cream rounded-full text-sm text-charcoal"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap items-center gap-6">
                  {client.ctaUrl && client.ctaText && (
                    <a
                      href={client.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-medium text-burgundy hover:text-burgundy-light transition-colors duration-300 group"
                      aria-label={client.ctaText}
                    >
                      {client.ctaText}
                      <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                {client.social && <SocialLinks social={client.social} />}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
