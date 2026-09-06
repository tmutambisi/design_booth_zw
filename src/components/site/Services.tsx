import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ProductItem {
  id: string;
  name: string;
  category: string;
  spec: string;
  image: string;
  rotation: number;
  offset: { x: number; y: number };
}

const PRODUCT_CATEGORIES = [
  { id: "merch", label: "01. Apparel & Wearables" },
  { id: "gifts", label: "02. Executive Gifts" },
  { id: "print", label: "03. Print & Signage" },
];

const PRODUCTS: Record<string, ProductItem[]> = {
  merch: [
    {
      id: "m1",
      name: "Heavyweight Branded Tee",
      category: "Screen Printing",
      spec: "240GSM Organic Cotton",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
      rotation: -6,
      offset: { x: -180, y: -40 },
    },
    {
      id: "m2",
      name: "Structured Corporate Cap",
      category: "3D Embroidery",
      spec: "Custom Metal Buckle",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
      rotation: 8,
      offset: { x: 180, y: 50 },
    },
    {
      id: "m3",
      name: "Thermal Tumbler",
      category: "Laser Engraving",
      spec: "Double-wall Stainless Steel",
      image:
        "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800",
      rotation: -3,
      offset: { x: 0, y: -80 },
    },
  ],
  gifts: [
    {
      id: "g1",
      name: "Gold Foiled Leather Journal",
      category: "Blind Embossing",
      spec: "Genuine Italian Leather",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      rotation: -8,
      offset: { x: -150, y: 30 },
    },
    {
      id: "g2",
      name: "Executive Pen Set",
      category: "Pad Printing",
      spec: "Matte Black Alloy",
      image:
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800",
      rotation: 5,
      offset: { x: 150, y: -50 },
    },
  ],
  print: [
    {
      id: "p1",
      name: "Hardcover Annual Report",
      category: "Offset Print",
      spec: "Spot UV & Matt Lamination",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
      rotation: -4,
      offset: { x: -150, y: -40 },
    },
    {
      id: "p2",
      name: "Architectural Signage",
      category: "Large Format",
      spec: "3D Acrylic & LED Backlit",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      rotation: 7,
      offset: { x: 150, y: 30 },
    },
  ],
};

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

        <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface sm:h-[640px]">
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
                        <div className="absolute left-3 top-3 rounded-full border border-border bg-background/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                          {product.category}
                        </div>
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
            Hover products to converge & inspect specifications
          </div>
        </div>
      </div>
    </section>
  );
}
