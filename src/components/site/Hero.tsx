import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import heroShowcase from "@/assets/hero-showcase.png";

const WORDS = ["VOICE", "IDENTITY", "PRESENCE"];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="display text-[clamp(2.75rem,8vw,5.25rem)]">
            We craft your
            <br />
            brand&apos;s{" "}
            <span className="relative inline-grid align-bottom">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={WORDS[i]}
                  initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary"
                >
                  {WORDS[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Design · Print · Brand — everything under one roof, in Harare.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Design today
            </a>
            <a
              href="#services"
              className="rounded-full border border-border px-7 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              Get a quote
            </a>
          </div>
        </div>

        <div className="halo relative flex items-center justify-center">
          <div className="absolute aspect-square w-[86%] max-w-xl rounded-full bg-surface-2/70 blur-3xl" />
          <div className="absolute aspect-square w-[62%] max-w-md rounded-full bg-surface-2 opacity-60 blur-2xl" />
          <motion.img
            src={heroShowcase}
            alt="Branded t-shirt, tumbler, notebook and business cards produced by Design Booth Graphics"
            width={1200}
            height={1200}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="float-slow relative w-[78%] max-w-lg drop-shadow-2xl lg:w-[86%]"
          />
        </div>
      </div>
    </section>
  );
}
