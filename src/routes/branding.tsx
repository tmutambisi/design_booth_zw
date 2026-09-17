import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";

import blindEmbossImg from "@/assets/brading/business cards.jpeg";
import bannerImg from "@/assets/brading/banner.jpeg";
import brandedApparelImg from "@/assets/brading/brand.jpeg";
import goldFoilImg from "@/assets/brading/engraved.jpeg";
import laserEngraveImg from "@/assets/brading/laser.jpeg";
import promotionalMerchImg from "@/assets/brading/WhatsApp Image 2026-09-16 at 15.48.26.jpeg";
import flagsImg from "@/assets/brading/WhatsApp Image 2026-09-16 at 15.48.27.jpeg";

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
                {FINISHES[active]?.name}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 block h-px w-full origin-left bg-primary/40"
              />
              <span className="mt-4 block text-xs text-muted-foreground">
                {FINISHES[active]?.spec}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Client finish samples */}
        <div className="mt-20">
          <span className="tag">Client finish samples</span>
          <h3 className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] text-foreground">
            Details you can <span className="text-primary">feel</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A closer look at the foil, pressure and laser finishes available for client stationery,
            packaging and gifts.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={goldFoilImg}
                  alt="Close-up of raised gold foil lettering on a white stationery card"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-6 sm:p-8">
                <span className="tag text-primary">Gold Foil</span>
                <h4 className="display mt-2 text-xl text-foreground group-hover:text-primary">
                  Metallic detail
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Reflective foil pressed into premium stock for stationery, invitations and
                  packaging.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={blindEmbossImg}
                  alt="Stack of branded business cards showing layered paper stock"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-6 sm:p-8">
                <span className="tag text-primary">Blind Emboss</span>
                <h4 className="display mt-2 text-xl text-foreground group-hover:text-primary">
                  Tactile paper stock
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Pressure-formed marks and layered card finishes that reward a closer look and
                  touch.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={laserEngraveImg}
                  alt="Laser engraving head marking a metal sheet with a bright beam"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-6 sm:p-8">
                <span className="tag text-primary">Laser Engrave</span>
                <h4 className="display mt-2 text-xl text-foreground group-hover:text-primary">
                  Permanent precision
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Crisp, permanent marking for metal, leather, drinkware, awards and executive
                  gifts.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={bannerImg}
                  alt="Set of branded pull-up display banners"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-6 sm:p-8">
                <span className="tag text-primary">Display Graphics</span>
                <h4 className="display mt-2 text-xl text-foreground group-hover:text-primary">
                  Branded environments
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Roll-up banners and event graphics that carry a consistent identity into the room.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={brandedApparelImg}
                  alt="Branded embroidered polo shirt with a corporate logo"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-6 sm:p-8">
                <span className="tag text-primary">Branded Apparel</span>
                <h4 className="display mt-2 text-xl text-foreground group-hover:text-primary">
                  Identity in motion
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Clean, durable logo applications for teams, uniforms and corporate wear.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={promotionalMerchImg}
                  alt="Blue and white branded promotional merchandise collection"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-6 sm:p-8">
                <span className="tag text-primary">Promotional Merchandise</span>
                <h4 className="display mt-2 text-xl text-foreground group-hover:text-primary">
                  Branded essentials
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Coordinated pens, USB drives, golf accessories and giveaways for memorable
                  campaigns.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-border bg-surface transition-colors hover:border-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={flagsImg}
                  alt="Collection of colourful branded teardrop flags"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border bg-background p-6 sm:p-8">
                <span className="tag text-primary">Outdoor Branding</span>
                <h4 className="display mt-2 text-xl text-foreground group-hover:text-primary">
                  Make the mark visible
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  High-impact feather flags and outdoor graphics built to stand out at distance.
                </p>
              </div>
            </div>
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
