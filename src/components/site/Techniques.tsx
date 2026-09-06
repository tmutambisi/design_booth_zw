const TECHNIQUES = [
  {
    name: "Screen Printing",
    text: "Punchy flat-colour brand marks laid down ink layer by ink layer on cotton.",
  },
  {
    name: "Embroidery",
    text: "Stitched logo textures on caps, golf shirts and corporate wear that never fade.",
  },
  {
    name: "Gold Foiling",
    text: "Heat-pressed metallic finishes for executive notebooks, folders and gift boxes.",
  },
  {
    name: "Laser Engraving",
    text: "Permanent precision marking on pens, tumblers, leather and metal giveaways.",
  },
];

export function Techniques() {
  return (
    <section id="techniques" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <span className="tag">Decoration techniques</span>
      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
        {TECHNIQUES.map((t) => (
          <div key={t.name} className="group bg-background p-8 transition-colors hover:bg-surface sm:p-12">
            <span className="mb-6 block h-1.5 w-1.5 rounded-full bg-primary opacity-40 transition-opacity group-hover:opacity-100" />
            <h3 className="display text-2xl">{t.name}</h3>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
