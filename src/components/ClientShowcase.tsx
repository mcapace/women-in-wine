import { clients } from "@/data/clients";
import type { ClientSocial } from "@/data/clients";

function SocialLinks({ social }: { social: ClientSocial }) {
  const links = [
    { key: "website", href: social.website, label: "Website", icon: "↗" },
    { key: "instagram", href: social.instagram, label: "Instagram", icon: "IG" },
    { key: "facebook", href: social.facebook, label: "Facebook", icon: "FB" },
    { key: "youtube", href: social.youtube, label: "YouTube", icon: "YT" },
    { key: "linkedin", href: social.linkedin, label: "LinkedIn", icon: "in" },
  ].filter((item) => item.href);

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-cream-dark/50">
      <span className="text-xs uppercase tracking-wider text-slate mr-1">Follow</span>
      {links.map(({ key, href, label }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-burgundy hover:text-burgundy-light underline underline-offset-2"
          aria-label={label}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export function ClientShowcase() {
  return (
    <section
      id="partners"
      className="py-16 lg:py-24 bg-cream"
      aria-labelledby="partners-heading"
    >
      <div className="container-wide">
        <h2 id="partners-heading" className="font-display text-3xl sm:text-4xl text-charcoal mb-4 text-center">
          Featured Partners
        </h2>
        <p className="text-slate text-center max-w-xl mx-auto mb-12">
          Meet the women in key roles at the heart of our program—and the wineries they lead.
        </p>
        <div className="grid gap-12 lg:gap-16">
          {clients.map((client) => (
            <article
              key={client.id}
              className="bg-white rounded-lg shadow-sm border border-cream-dark/50 overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-2">
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
                      className="inline-flex items-center font-medium text-burgundy hover:text-burgundy-light transition-colors"
                    >
                      {client.ctaText}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                {client.social && <SocialLinks social={client.social} />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
