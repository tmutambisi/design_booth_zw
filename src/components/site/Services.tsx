import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

import hiVisJacket from "@/assets/images/DEFAULT_1024X1024 (1).jpg";
import safetyWorkwear from "@/assets/images/DEFAULT_1024X1024 (2).jpg";
import brandedCap from "@/assets/images/HS-UB-66-C-DEFAULT_DEFAULT.jpg";
import executiveGiftSet from "@/assets/images/GF-AV-1177-B-DEFAULT_DEFAULT.jpg";
import brandedPens from "@/assets/images/IDEA-0224-DEFAULT_DEFAULT.jpg";
import thermalTumblers from "@/assets/images/DR-AC-298-B-DEFAULT_DEFAULT.jpg";
import outdoorGazebo from "@/assets/images/DISPLAY-2068-DEFAULT_DEFAULT.jpg";
import teardropFlags from "@/assets/images/DISPLAY-1025-DEFAULT_DEFAULT.jpg";

interface ProductItem {
  id: string;
  name: string;
  spec: string;
  image: string;
  rotation: number;
  offset: { x: number; y: number };
}

const PRODUCT_CATEGORIES = [
  { id: "merch", label: "01. Apparel & Workwear" },
  { id: "gifts", label: "02. Executive Gifts & Drinkware" },
  { id: "print", label: "03. Display & Outdoor Signage" },
];

const PRODUCTS: Record<string, ProductItem[]> = {
  merch: [
    {
      id: "m1",
      name: "Industrial Hi-Vis Parka",
      spec: "Thermal insulation, waterproof with chest branding",
      image: hiVisJacket,
      rotation: -6,
      offset: { x: -180, y: -40 },
    },
    {
      id: "m2",
      name: "Safety Utility Jacket",
      spec: "High-visibility dual tone, reinforced stitching",
      image: safetyWorkwear,
      rotation: 8,
      offset: { x: 180, y: 50 },
    },
    {
      id: "m3",
      name: "Custom Trucker Cap",
      spec: "Breathable mesh back with screen-printed brand logo",
      image: brandedCap,
      rotation: -3,
      offset: { x: 0, y: -80 },
    },
  ],
  gifts: [
    {
      id: "g1",
      name: "Executive VIP Gift Set",
      spec: "Notebook, engraved metal pen and keyring in presentation box",
      image: executiveGiftSet,
      rotation: -8,
      offset: { x: -180, y: 30 },
    },
    {
      id: "g2",
      name: "Insulated Thermal Tumbler Trio",
      spec: "Double-walled matte finish with handle and laser marking",
      image: thermalTumblers,
      rotation: 5,
      offset: { x: 180, y: -40 },
    },
    {
      id: "g3",
      name: "Branded Slimline Ballpoint Pens",
      spec: "Multi-color barrel options with high-precision pad printing",
      image: brandedPens,
      rotation: -2,
      offset: { x: 0, y: -70 },
    },
  ],
  print: [
    {
      id: "p1",
      name: "Branded Event Gazebo / Marquee",
      spec: "Heavy-duty pop-up frame with full-color waterproof canopy & side walls",
      image: outdoorGazebo,
      rotation: -4,
      offset: { x: -150, y: -40 },
    },
    {
      id: "p2",
      name: "Teardrop & Telescopic Flags",
      spec: "Double-sided sublimated fabric with cross base and ground spike",
      image: teardropFlags,
      rotation: 7,
      offset: { x: 150, y: 30 },
    },
  ],
};

/** Mobile touch-swipe carousel slide */
function MobileSlider({ products }: { products: ProductItem[] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) setCurrent((c) => Math.min(c + 1, products.length - 1));
      else setCurrent((c) => Math.max(c - 1, 0));
    }
    touchStartX.current = null;
  };

  const product = products[current];

  return (
    <div className="relative w-full">
      {/* Slide area */}
      <div
        className="relative overflow-hidden rounded-3xl border border-border bg-surface"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-background">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="border-t border-border bg-background p-6">
              <h4 className="display text-xl text-foreground">{product.name}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {product.spec}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots + arrows nav */}
      <div className="mt-5 flex items-center justify-between px-1">
        {/* Prev */}
        <button
          onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
          disabled={current === 0}
          aria-label="Previous product"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? "w-6 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => setCurrent((c) => Math.min(c + 1, products.length - 1))}
          disabled={current === products.length - 1}
          aria-label="Next product"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Slide counter */}
      <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
        {current + 1} / {products.length} — swipe to explore
      </p>
    </div>
  );
}

export function Services() {
  const [activeTab, setActiveTab] = useState("merch");
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const activeProducts = PRODUCTS[activeTab] ?? [];

  return (
    <section
      id="services"
      className="flex min-h-[90vh] flex-col justify-center overflow-hidden px-5 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="tag text-secondary">Tactile craftsmanship</span>
            <h2 className="display mt-4 text-[clamp(2rem,5vw,3.75rem)] text-foreground">
              Branded <span className="italic text-primary">products</span> in motion
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`rounded-full px-6 py-3 text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? "scale-105 bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "border border-border bg-surface text-muted-foreground hover:border-secondary hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile: swipe slider ──────────────────────────────────── */}
        <div className="sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <MobileSlider products={activeProducts} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Desktop: scattered card layout ───────────────────────── */}
        <div className="relative hidden h-[560px] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface sm:flex sm:h-[640px]">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex h-full w-full items-center justify-center"
            >
              {activeProducts.map((product, idx) => {
                const isHovered = hoveredProduct === product.id;
                return (
                  <motion.div
                    key={product.id}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      x: product.offset.x * 4,
                      y: product.offset.y * 4,
                      rotate: product.rotation * 2,
                    }}
                    animate={{
                      opacity: 1,
                      scale: isHovered ? 1.08 : 1,
                      x: product.offset.x,
                      y: product.offset.y,
                      rotate: isHovered ? 0 : product.rotation,
                      zIndex: isHovered ? 30 : idx + 10,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.7,
                      y: -100,
                      transition: { duration: 0.3 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 18,
                      mass: 0.8,
                    }}
                    className="group absolute cursor-pointer"
                  >
                    <div className="relative w-56 rounded-2xl border border-border bg-card p-3 shadow-xl transition-colors hover:border-primary hover:shadow-2xl sm:w-72">
                      <div className="relative h-56 overflow-hidden rounded-xl bg-muted sm:h-64">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-col justify-between px-2 pb-2 pt-4">
                        <h4 className="text-base font-bold tracking-tight text-foreground">
                          {product.name}
                        </h4>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">
                          {product.spec}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-xs text-muted-foreground shadow-sm backdrop-blur-md">
            Hover products to converge &amp; inspect specifications
          </div>
        </div>
      </div>
    </section>
  );
}
