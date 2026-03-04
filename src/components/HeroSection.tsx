export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-16 px-5 bg-gradient-to-b from-cream-dark/30 to-cream"
      aria-labelledby="hero-heading"
    >
      <div className="container-narrow text-center">
        <p className="font-accent text-burgundy uppercase tracking-[0.2em] text-sm mb-4">
          Wine Spectator Program
        </p>
        <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
          Women in Wine
        </h1>
        <p className="font-accent text-xl sm:text-2xl text-slate max-w-2xl mx-auto leading-relaxed">
          Women who influence the wine world—from vineyard to cellar to table. Celebrating the leaders and visionaries shaping what comes next.
        </p>
      </div>
    </section>
  );
}
