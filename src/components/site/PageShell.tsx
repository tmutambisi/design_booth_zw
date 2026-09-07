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
}: {
  tag: string;
  lines: string[];
  sub?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 sm:pt-44 sm:pb-24">
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
    </header>
  );
}
