import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";

import outdoorGazebo from "@/assets/images/DISPLAY-2068-DEFAULT_DEFAULT.jpg";
import teardropFlags from "@/assets/images/DISPLAY-1025-DEFAULT_DEFAULT.jpg";

const title = "Large Format Print & Signage | Design Booth Graphics";
const description =
  "Billboards, pull-up banners, shopfront signage, vehicle wraps and litho printing in Harare, Bulawayo and nationwide Zimbabwe.";

export const Route = createFileRoute("/print")({
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
  component: PrintPage,
});

const SHOWCASE_PRODUCTS = [
  {
    title: "Branded Pop-Up Gazebo & Marquee",
    subtitle: "Turnkey outdoor event shelter with full-color waterproof canopy & fitted valance",
    spec: "3m × 3m Aluminum Hex Frame · High-Res Sublimation · UV-Resistant",
    image: outdoorGazebo,
  },
  {
    title: "Teardrop & Telescopic Display Flags",
    subtitle:
      "Dynamic roadside and event flags designed for maximum wind stability & brand visibility",
    spec: "2.5m — 4.5m Heights · Weatherproof Warp-Knit · Ground Spike & Cross Base",
    image: teardropFlags,
  },
];

const LAYERS = [
  { name: "Billboards", size: "6m × 3m", note: "Weatherproof mesh & PVC" },
  { name: "Shopfront Signage", size: "Custom", note: "Perspex, ACP and lightbox" },
  {
    name: "Event Gazebos & Tents",
    size: "3m × 3m / 3m × 6m",
    note: "Full canopy & half-wall branding",
  },
  {
    name: "Teardrop & Sharkfin Flags",
    size: "2.5m — 4.5m",
    note: "Sublimated flag fabric with heavy bases",
  },
  { name: "Pull-up Banners", size: "2m × 0.85m", note: "Retractable executive cassette base" },
  { name: "Vehicle Wraps", size: "Full / partial", note: "Cast vinyl with UV lamination" },
  { name: "Litho & Digital", size: "A6 — SRA3", note: "Flyers, folders, brochures" },
];

function Layer({ item, index }: { item: (typeof LAYERS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="group sticky top-24 rounded-3xl border border-border bg-background p-8 sm:p-12"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="tag">
            {String(index + 1).padStart(2, "0")} — {item.size}
          </span>
          <h2 className="display mt-4 text-[clamp(1.75rem,5vw,3.25rem)] transition-colors group-hover:text-primary">
            {item.name}
          </h2>
        </div>
        <p className="max-w-xs text-sm text-muted-foreground">{item.note}</p>
      </div>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 block h-px w-full origin-left bg-border transition-colors group-hover:bg-primary"
      />
    </motion.div>
  );
}

function PrintPage() {
  return (
    <PageShell>
      <KineticHeading
        tag="02 — Large format & Display"
        lines={["Print that", "fills a street"]}
        sub="From high-impact event gazebos and flags to six-metre billboards, produced, finished and installed nationwide."
      />

      {/* Featured Outdoor Display Products */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {SHOWCASE_PRODUCTS.map((prod, i) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background p-6">
                <img
                  src={prod.image}
                  alt={prod.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-8">
                <span className="tag text-primary">Outdoor Display Equipment</span>
                <h3 className="display mt-3 text-2xl text-foreground group-hover:text-primary">
                  {prod.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {prod.subtitle}
                </p>
                <div className="mt-4 inline-block rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted-foreground">
                  {prod.spec}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-10 px-5 pb-32 sm:px-8">
        {LAYERS.map((l, i) => (
          <Layer key={l.name} item={l} index={i} />
        ))}
      </section>
    </PageShell>
  );
}
