const WORDS = [
  "Live Graphic Design",
  "Vinyl Weeding",
  "Laser Engraving",
  "Screen Printing",
  "Corporate T-Shirts",
  "Thermal Tumblers",
  "Branded Caps",
  "Paper Bags",
  "Large Format Printing",
  "Embroidery",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div className="marquee-track flex w-max gap-10">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-10">
            {WORDS.map((w) => (
              <span key={w} className="tag flex items-center gap-10 whitespace-nowrap">
                {w}
                <span className="text-secondary">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
