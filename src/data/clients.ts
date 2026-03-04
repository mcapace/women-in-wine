export interface Client {
  id: string;
  name: string;
  tagline: string;
  description: string;
  region?: string;
  highlights?: string[];
  ctaText?: string;
  ctaUrl?: string;
}

export const clients: Client[] = [
  {
    id: "client-1",
    name: "Featured Partner One",
    tagline: "Crafting excellence from vine to glass",
    description:
      "A family-owned estate where tradition meets innovation. Our winemakers bring decades of expertise and a commitment to sustainable practices across every bottle.",
    region: "Napa Valley, California",
    highlights: ["Estate-grown varietals", "Sustainable viticulture", "Award-winning reserves"],
    ctaText: "Learn more",
    ctaUrl: "#",
  },
  {
    id: "client-2",
    name: "Featured Partner Two",
    tagline: "Where terroir tells the story",
    description:
      "From steep hillside vineyards to the cellar, every step honors the land and the people behind it. Discover wines that speak to place and passion.",
    region: "Willamette Valley, Oregon",
    highlights: ["Pinot Noir specialists", "Organic certification", "Estate & single-block bottlings"],
    ctaText: "Explore",
    ctaUrl: "#",
  },
];
