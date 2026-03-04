export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <h2 id="about-heading" className="font-display text-3xl sm:text-4xl text-charcoal mb-8">
          About the Program
        </h2>
        <div className="prose prose-lg max-w-none text-slate">
          <p className="leading-relaxed">
            Women in Wine spotlights the leaders, winemakers, and visionaries who are redefining the industry.
            Through storytelling and partnership, we elevate the voices and contributions of women at every stage
            of the wine journey.
          </p>
          <p className="leading-relaxed mt-4">
            Our featured partners represent excellence in craft, stewardship of the land, and a commitment to
            quality that resonates with Wine Spectator&apos;s values. Explore their stories and discover the
            people behind the bottles.
          </p>
        </div>
      </div>
    </section>
  );
}
