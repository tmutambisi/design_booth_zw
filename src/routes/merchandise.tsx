import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";

import corporateApparel from "@/assets/images/CW-AV-186-A-CW-AV-186-A-W-MOGR42_DEFAULT.jpg";
import safetyWorkwear from "@/assets/images/DEFAULT_1024X1024 (2).jpg";
import hiVisJacket from "@/assets/images/DEFAULT_1024X1024 (1).jpg";
import executiveGiftSet from "@/assets/images/GF-AV-1177-B-DEFAULT_DEFAULT.jpg";
import thermalTumblers from "@/assets/images/DR-AC-298-B-DEFAULT_DEFAULT.jpg";
import stainlessMug from "@/assets/images/DW-6525_default.jpg";
import honeycombMug from "@/assets/images/DW-7000_default.jpg";
import brandedCap from "@/assets/images/HS-UB-66-C-DEFAULT_DEFAULT.jpg";
import brandedPens from "@/assets/images/IDEA-0224-DEFAULT_DEFAULT.jpg";

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
  {
    name: "Executive Corporate Shirts",
    spec: "Tailored poplin cotton with custom breast & sleeve embroidery",
    category: "Corporate Uniforms",
    image: corporateApparel,
    rotate: -4,
  },
  {
    name: "Executive Presentation Box",
    spec: "Leatherette journal, precision metal pen and branded keyring",
    category: "Luxury Gift Sets",
    image: executiveGiftSet,
    rotate: 3,
  },
  {
    name: "Trio Insulated Travel Tumblers",
    spec: "Double-walled matte finish, laser etched company insignia",
    category: "Premium Drinkware",
    image: thermalTumblers,
    rotate: -3,
  },
  {
    name: "Honeycomb Grip Thermal Mug",
    spec: "Textured tactile stainless steel with presentation gift carton",
    category: "Executive Drinkware",
    image: honeycombMug,
    rotate: 4,
  },
  {
    name: "Ergonomic Grip Travel Flasks",
    spec: "Color-accented silicone heat band with multi-color corporate logo",
    category: "Promotional Drinkware",
    image: stainlessMug,
    rotate: -2,
  },
  {
    name: "High-Visibility Industrial Parka",
    spec: "Reflective safety tape, heavy-duty weatherproofing & logo print",
    category: "Protective Workwear",
    image: hiVisJacket,
    rotate: 3,
  },
  {
    name: "Two-Tone Safety Jacket",
    spec: "Fluorescent contrast paneling, industrial zip with company badge",
    category: "Site & Safety Wear",
    image: safetyWorkwear,
    rotate: -4,
  },
  {
    name: "Custom Mesh Trucker Cap",
    spec: "Ventilated mesh crown with bold high-density screen print",
    category: "Branded Headwear",
    image: brandedCap,
    rotate: 2,
  },
  {
    name: "Classic Ballpoint Pen Suite",
    spec: "Precision tip, multi-tone barrels and clean pad printed typography",
    category: "Executive Stationery",
    image: brandedPens,
    rotate: -3,
  },
];

const SWATCHES = ["Cotton", "Canvas", "Leather", "Stainless", "Perspex", "Kraft"];

function MerchandisePage() {
  const [material, setMaterial] = useState(SWATCHES[0]);

  return (
    <PageShell>
      <KineticHeading
        tag="03 — Merchandise & Gifts"
        lines={["Merch that", "floats off", "the shelf"]}
        sub="Apparel, drinkware and executive gifts decorated in-house and delivered nationwide across Zimbabwe."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 50, rotate: item.rotate, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -10, rotate: item.rotate / 2 }}
              className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary"
            >
              <div className="relative aspect-square overflow-hidden bg-background p-4">
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.spec}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="tag absolute left-4 top-4 rounded-full border border-border bg-background/90 px-3 py-1 text-[10px] text-primary backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="border-t border-border bg-background p-6">
                <h2 className="display text-xl transition-colors group-hover:text-primary">
                  {item.name}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.spec}</p>
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
