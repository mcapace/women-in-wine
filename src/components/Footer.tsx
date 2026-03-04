export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-display text-lg">Women in Wine</p>
          <p className="text-sm text-cream/80">
            A Wine Spectator program. Celebrating excellence in wine.
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-cream/20 text-center text-sm text-cream/70">
          <p>© {new Date().getFullYear()} Wine Spectator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
