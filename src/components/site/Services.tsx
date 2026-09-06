import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import branding from "@/assets/svc-branding.png";
import print from "@/assets/svc-print.png";
import merch from "@/assets/svc-merch.png";

const SERVICES = [
  {
    id: "branding",
    tag: "01 / Branding Services",
    title: "Branding",
    line: "Your mark, applied to anything",
    image: branding,
    items: [
      "Pad Printing",
      "Laser Engraving",
      "Domed Stickers",
      "Blind Embossing",
      "Gold Foiling",
      "Vinyl Stickers",
      "Embroidery",
    ],
  },
  {
    id: "print",
    tag: "02 / Graphics & Print Studio",
    title: "Large Format Print",
    line: "From rough sketch to press-ready artwork",
    image: print,
    items: [
      "Logos",
      "Press Ads",
      "Calendars",
      "Magazines",
      "Annual Reports",
      "Brochures",
      "Banners",
      "Signage",
      "Billboards",
      "Business Cards",
      "Letterheads",
      "Flyers",
    ],
  },
  {
    id: "merch",
    tag: "03 / Merchandise & Corporate Wear",
    title: "3D Merchandise",
    line: "Brands you can hold",
    image: merch,
    items: [
      "Executive gifts",
      "Leather products",
      "Lanyards",
      "Shirts",
      "Caps",
      "T-shirts",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active] ?? SERVICES[0]!;

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <span className="tag">Everything under one roof</span>
      <h2 className="display mt-5 max-w-xl text-[clamp(2rem,5vw,3.5rem)]">
        The full service list
      </h2>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="border-t border-border">
          {SERVICES.map((s, idx) => (
            <button
              key={s.id}
              onMouseEnter={() => setActive(idx)}
              onFocus={() => setActive(idx)}
              onClick={() => setActive(idx)}
              className="group block w-full border-b border-border py-7 text-left"
            >
              <span className="tag">{s.tag}</span>
              <span
                className={`display mt-3 block text-[clamp(1.75rem,4vw,2.75rem)] transition-colors ${
                  active === idx ? "text-primary" : "text-foreground/45"
                }`}
              >
                {s.title}
              </span>
              <AnimatePresence initial={false}>
                {active === idx && (
                  <motion.span
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="block overflow-hidden"
                  >
                    <span className="mt-3 block text-sm text-muted-foreground">{s.line}</span>
                    <span className="mt-4 flex flex-wrap gap-2">
                      {s.items.map((i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {i}
                        </span>
                      ))}
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        <div className="relative order-first flex min-h-[320px] items-center justify-center rounded-3xl border border-border bg-surface transition-colors hover:border-primary/40 lg:order-none lg:min-h-[560px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.id}
              src={current.image}
              alt={current.line}
              loading="lazy"
              width={912}
              height={912}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[68%] max-w-md"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
