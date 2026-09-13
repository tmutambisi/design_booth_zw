import { type ReactNode } from "react";
import { motion } from "motion/react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./Contact";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <motion.main
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
      >
        {children}
      </motion.main>
      <SiteFooter />
    </div>
  );
}

export function KineticHeading({
  tag,
  lines,
  sub,
  image,
}: {
  tag: string;
  lines: string[];
  sub?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <header
      className={`mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 sm:pt-44 sm:pb-24 ${
        image ? "grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16" : ""
      }`}
    >
      <div>
        <motion.span
          className="tag block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          {tag}
        </motion.span>

        <h1 className="display mt-5 text-[clamp(2.5rem,8vw,5.5rem)]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden py-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                  delay: 0.08 * i,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {sub ? (
          <motion.p
            className="mt-7 max-w-md text-[15px] leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {sub}
          </motion.p>
        ) : null}
      </div>

      {image ? (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xl"
        >
          <img src={image.src} alt={image.alt} className="aspect-[1.18] w-full object-cover" />
        </motion.div>
      ) : null}
    </header>
  );
}
