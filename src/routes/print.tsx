import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";

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

const LAYERS = [
  { name: "Billboards", size: "6m × 3m", note: "Weatherproof mesh & PVC" },
  { name: "Shopfront Signage", size: "Custom", note: "Perspex, ACP and lightbox" },
  { name: "Pull-up Banners", size: "2m × 0.85m", note: "Retractable cassette base" },
  { name: "Vehicle Wraps", size: "Full / partial", note: "Cast vinyl with lamination" },
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
        tag="02 — Large format"
        lines={["Print that", "fills a street"]}
        sub="From A6 flyers to six-metre billboards, produced, finished and installed nationwide."
      />

      <section className="mx-auto max-w-5xl space-y-10 px-5 pb-32 sm:px-8">
        {LAYERS.map((l, i) => (
          <Layer key={l.name} item={l} index={i} />
        ))}
      </section>
    </PageShell>
  );
}
