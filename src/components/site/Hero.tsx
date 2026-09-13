import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import corporateApparel from "@/assets/images/CW-AV-186-A-CW-AV-186-A-W-MOGR42_DEFAULT.jpg";

const WORDS = ["VOICE", "IDENTITY", "PRESENCE"];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:min-h-[calc(100vh-4rem)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="lg:pb-4">
          <h1 className="display max-w-xl text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.98]">
            We craft your
            <br />
            brand&apos;s{" "}
            <span className="relative inline-grid align-bottom">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={WORDS[i]}
                  initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary"
                >
                  {WORDS[i]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            Design · Print · Brand — everything under one roof, in Harare.
          </p>

          <div className="mt-11 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Design today
            </a>
            <a
              href="#services"
              className="rounded-full border border-border px-8 py-3.5 text-sm transition-colors hover:border-primary hover:text-primary"
            >
              Get a quote
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:pt-2">
          <div className="relative w-full max-w-[650px] overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-2xl transition-transform hover:scale-[1.01]">
            <motion.img
              src={corporateApparel}
              alt="Executive Corporate Uniforms & Embroidered Apparel by Design Booth Graphics"
              width={1200}
              height={1200}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[1.18] w-full object-cover"
            />
            <div className="border-t border-border/60 bg-background px-6 py-5">
              <span className="tag text-primary">Executive Workwear</span>
              <p className="display text-sm font-medium text-foreground">
                Tailored Corporate Shirts & High-Precision Embroidery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
