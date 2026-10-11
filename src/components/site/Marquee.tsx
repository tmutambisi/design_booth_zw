const WORDS = [
  "Branded Corporate Gifts",
  "Corporate Wear",
  "Print & Signage",
  "Branding",
  "Vehicle Branding",
  "Laser Engraving",
  "Screen Printing",
  "Thermal Tumblers",
  "Branded Caps",
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
                <span className="text-secondary">|</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
