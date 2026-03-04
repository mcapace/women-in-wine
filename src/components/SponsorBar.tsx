import Image from "next/image";

const CLINE_LOGO = `/images/${encodeURIComponent("Cline Full Logo - Color-01 (2).png")}`;
const ONEILL_LOGO = `/images/${encodeURIComponent("Oneill_Logo_hor_RGB_lrg.png")}`;

export function SponsorBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-cream-dark/50 h-[7.5rem] flex flex-col justify-center">
      <div className="container-wide px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate font-medium mb-3">
          Sponsored Partnership
        </p>
        <div className="grid grid-cols-2 gap-6 sm:gap-12 max-w-2xl mx-auto items-center justify-items-center">
          <a
            href="https://clinecellars.com/women-of-cline"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-8 w-full max-w-[140px] sm:max-w-[180px] flex-shrink-0 transition-opacity hover:opacity-80"
            aria-label="Cline Cellars"
          >
            <Image
              src={CLINE_LOGO}
              alt="Cline Cellars"
              fill
              className="object-contain object-center"
              sizes="180px"
            />
          </a>
          <a
            href="https://oneillwine.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-8 w-full max-w-[140px] sm:max-w-[180px] flex-shrink-0 transition-opacity hover:opacity-80"
            aria-label="O'Neill Vintners & Distillers"
          >
            <Image
              src={ONEILL_LOGO}
              alt="O'Neill Vintners & Distillers"
              fill
              className="object-contain object-center"
              sizes="180px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
