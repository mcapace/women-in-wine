export interface ClientSocial {
  website?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  linkedin?: string;
}

export interface Client {
  id: string;
  name: string;
  tagline: string;
  description: string;
  region?: string;
  highlights?: string[];
  ctaText?: string;
  ctaUrl?: string;
  social?: ClientSocial;
}

export const clients: Client[] = [
  {
    id: "cline",
    name: "Cline Cellars",
    tagline: "Second-generation leadership, rooted in stewardship and place",
    description:
      "Women have always played a defining role at Cline, and today that legacy is being carried forward by sisters Megan and Hilary Cline. As second-generation leaders, they are shaping the next chapter of the family's winery, leading with a deep respect for the land, the people, and the community that have sustained Cline for decades. Together, they balance tradition with the perspective of the next generation, championing sustainable farming, working with family farmers, and with a focus on wines and experiences that feel honest, welcoming, and rooted in place. Their leadership is grounded in stewardship and collaboration, honoring what came before while thoughtfully guiding Cline forward for the next generation.",
    region: "California",
    highlights: [
      "Sustainable farming",
      "Family farmers",
      "Honest, welcoming experiences",
    ],
    ctaText: "Meet the Women of Cline",
    ctaUrl: "https://clinecellars.com/women-of-cline",
    social: {
      website: "https://clinecellars.com",
      instagram: "https://www.instagram.com/clinecellars/",
      facebook: "https://www.facebook.com/clinefamilycellars",
      youtube: "https://www.youtube.com/@ClineCellarswine",
    },
  },
  {
    id: "oneill",
    name: "O'Neill Vintners & Distillers",
    tagline: "Regenerative winegrowing at scale—thoughtful stewardship and great wine",
    description:
      "At a moment when regenerative agriculture is redefining the wine industry, Master of Wine Kryss Speegle plays a leading role in advancing O'Neill Vintners and Distillers' longstanding sustainability strategy at scale. As Executive Vice President of Winegrowing and Winemaking, she sets the strategic direction for the company's vineyards and winemaking programs, guiding teams of winemakers and winegrowers across a diverse, global portfolio. Kryss is recognized for aligning quality, value, and growth through strategic partnerships, deep insight into wine industry dynamics, and highly scalable production models. A committed educator and relationship builder, she invests in talent development as intentionally as she develops wines. As O'Neill continues to lead the industry in regenerative and regenerative organic practices, Kryss is emerging as a defining voice for how thoughtful stewardship and great wine can advance together.",
    region: "California",
    highlights: [
      "Regenerative & regenerative organic",
      "Global portfolio",
      "Talent development",
    ],
    ctaText: "Visit O'Neill",
    ctaUrl: "https://oneillwine.com",
    social: {
      website: "https://oneillwine.com",
      instagram: "https://www.instagram.com/oneillwines/",
      facebook: "https://www.facebook.com/oneillwines",
      linkedin: "https://www.linkedin.com/company/oneillvintnersanddistillers",
    },
  },
];
