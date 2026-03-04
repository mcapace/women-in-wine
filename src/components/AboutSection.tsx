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
            With the influence of women in wine expanding each year, those in key roles often feel compelled to share the knowledge they&apos;ve learned on their path to success—and in turn, inspire others. Visibility and mentorship matter: when the next generation can see leaders who look like them, they can imagine the path. Women in Wine spotlights those leaders, winemakers, and visionaries who are redefining the industry.
          </p>
          <p className="leading-relaxed mt-4">
            Through storytelling and partnership, we elevate the voices and contributions of women at every stage of the wine journey. Our featured partners represent excellence in craft, stewardship of the land, and a commitment to quality that resonates with Wine Spectator&apos;s values. Explore their stories and discover the people behind the bottles.
          </p>
        </div>
      </div>
    </section>
  );
}
