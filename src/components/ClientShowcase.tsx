import { clients } from "@/data/clients";

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
          Meet the women and wineries at the heart of our program.
        </p>
        <div className="grid gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <article
              key={client.id}
              className="bg-white rounded-lg shadow-sm border border-cream-dark/50 overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <span className="font-accent text-burgundy text-sm uppercase tracking-wider">
                  Partner {index + 1}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-charcoal mt-2 mb-2">
                  {client.name}
                </h3>
                <p className="font-accent text-lg text-gold-dark mb-4">{client.tagline}</p>
                {client.region && (
                  <p className="text-sm text-slate mb-4">{client.region}</p>
                )}
                <p className="text-slate leading-relaxed mb-6">{client.description}</p>
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
                {client.ctaUrl && client.ctaText && (
                  <a
                    href={client.ctaUrl}
                    className="inline-flex items-center font-medium text-burgundy hover:text-burgundy-light transition-colors"
                  >
                    {client.ctaText}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
