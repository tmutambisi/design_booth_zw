import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";

const title = "Branding & Identity | Design Booth Graphics Harare";
const description =
  "Logo design, corporate identity, gold foiling and laser engraving in Harare. Zimbabwean owned brand studio crafting credible, creative identities.";

export const Route = createFileRoute("/branding")({
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
  component: BrandingPage,
});

const FINISHES = [
  { name: "Gold Foil", spec: "Heat-pressed metallic film" },
  { name: "Blind Emboss", spec: "Pressure formed, no ink" },
  { name: "Laser Engrave", spec: "Permanent precision marking" },
  { name: "Spot UV", spec: "High-gloss raised varnish" },
];

const DELIVERABLES = [
  "Logo systems",
  "Brand guidelines",
  "Stationery suites",
  "Packaging",
  "Vehicle branding",
  "Signage identity",
];

function BrandingPage() {
  const [active, setActive] = useState(0);

  return (
    <PageShell>
      <KineticHeading
        tag="01 — Branding"
        lines={["Identity,", "engraved"]}
        sub="We craft brand marks and finish them in metal, foil and pressure — identity you can feel with your fingertips."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-background p-8 sm:p-10">
            <span className="tag">Finish simulator</span>
            <div className="mt-8 flex flex-col">
              {FINISHES.map((f, i) => (
                <button
                  key={f.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative border-b border-border py-5 text-left last:border-0"
                >
                  {active === i && (
                    <motion.span
                      layoutId="finish-bar"
                      className="absolute -left-4 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span
                    className={`display block text-xl transition-colors ${
                      active === i ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {f.name}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">{f.spec}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative grid min-h-[24rem] place-items-center overflow-hidden bg-surface p-10">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, rotateX: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="rounded-2xl border border-border bg-background px-10 py-14 text-center shadow-sm sm:px-20"
            >
              <span className="tag">Design Booth</span>
              <span className="display mt-4 block text-[clamp(2rem,5vw,3.25rem)] text-primary">
                {FINISHES[active].name}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 block h-px w-full origin-left bg-primary/40"
              />
              <span className="mt-4 block text-xs text-muted-foreground">
                {FINISHES[active].spec}
              </span>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-2">
          {DELIVERABLES.map((d, i) => (
            <motion.span
              key={d}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 160, damping: 20 }}
              whileHover={{ y: -4 }}
              className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground"
            >
              {d}
            </motion.span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
