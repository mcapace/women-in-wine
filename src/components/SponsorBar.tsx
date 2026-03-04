import Image from "next/image";

const WS_LOGO = `/images/${encodeURIComponent("WS logo (6).png")}`;

export function SponsorBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-cream-dark/50">
      <div className="container-wide flex items-center justify-center gap-3 h-11 px-4">
        <span className="text-xs uppercase tracking-wider text-slate font-medium">
          Sponsored by
        </span>
        <a
          href="https://www.winespectator.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-6 w-32 inline-block"
          aria-label="Wine Spectator"
        >
          <Image
            src={WS_LOGO}
            alt=""
            fill
            className="object-contain object-center"
            sizes="128px"
          />
        </a>
      </div>
    </div>
  );
}
