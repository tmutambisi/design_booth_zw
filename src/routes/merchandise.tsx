import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";
import merch from "@/assets/svc-merch.png";
import branding from "@/assets/svc-branding.png";
import print from "@/assets/svc-print.png";

const title = "Corporate Merchandise & Gifts | Design Booth Graphics";
const description =
  "Branded t-shirts, caps, tumblers, notebooks and executive gifts in Zimbabwe — screen printing, embroidery, foiling and laser engraving.";

export const Route = createFileRoute("/merchandise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MerchandisePage,
});

const ITEMS = [
  { name: "Branded Apparel", spec: "240GSM cotton, screen print", image: merch, rotate: -6 },
  { name: "Executive Gifts", spec: "Leather, foiled and boxed", image: branding, rotate: 5 },
  { name: "Drinkware", spec: "Laser engraved stainless", image: print, rotate: -3 },
];

const SWATCHES = ["Cotton", "Canvas", "Leather", "Stainless", "Perspex", "Kraft"];

function MerchandisePage() {
  const [material, setMaterial] = useState(SWATCHES[0]);

  return (
    <PageShell>
      <KineticHeading
        tag="03 — Merchandise"
        lines={["Merch that", "floats off", "the shelf"]}
        sub="Apparel, drinkware and executive gifts decorated in-house and delivered nationwide."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 80, rotate: item.rotate, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: i * 0.1 }}
              whileHover={{ y: -14, rotate: item.rotate / 2 }}
              className="overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="border-t border-border bg-background p-6">
                <h2 className="display text-xl">{item.name}</h2>
                <p className="mt-2 text-xs text-muted-foreground">{item.spec}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <span className="tag">Material swatches</span>
          <div className="mt-8 flex flex-wrap gap-3">
            {SWATCHES.map((s) => (
              <button
                key={s}
                onMouseEnter={() => setMaterial(s)}
                onClick={() => setMaterial(s)}
                className="relative rounded-full border border-border bg-background px-5 py-2.5 text-xs transition-colors hover:border-primary"
              >
                {material === s && (
                  <motion.span
                    layoutId="swatch-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={`relative ${material === s ? "text-primary-foreground" : "text-muted-foreground"}`}
                >
                  {s}
                </span>
              </button>
            ))}
          </div>
          <motion.p
            key={material}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="display mt-10 text-[clamp(1.75rem,5vw,3rem)]"
          >
            {material} — decorated your way.
          </motion.p>
        </div>
      </section>
    </PageShell>
  );
}
