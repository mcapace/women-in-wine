import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Women in Wine | Wine Spectator",
  description:
    "Celebrating the women shaping the future of wine—from vineyard to cellar to table.",
  openGraph: {
    title: "Women in Wine | Wine Spectator",
    description:
      "Celebrating the women shaping the future of wine—from vineyard to cellar to table.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
