import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import dbgLogo from "@/assets/logo/logo.jpg";

const links = [
  { label: "About", to: "/about" },
  { label: "Branding", to: "/branding" },
  { label: "Corporate wear & corporate gifts", to: "/merchandise" },
  { label: "Our clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden && !open ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#2d69d6] text-white shadow-[0_10px_30px_rgba(29,71,160,0.2)]"
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 text-white">
          <img src={dbgLogo} alt="Design Booth Graphics Logo" className="h-10 w-auto object-contain sm:h-12" />
          <span className="display text-[11px] font-semibold tracking-tight text-white sm:text-sm">
            DesignBooth
          </span>
        </div>

        <nav className="hidden items-center gap-5 text-center md:flex xl:gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-[11px] leading-none text-white/70 transition-colors hover:text-white xl:text-[12px] 2xl:text-[13px]"
              activeProps={{ className: "text-white" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full border border-white/40 bg-white/0 px-4 py-2 text-[11px] font-medium text-white transition-colors hover:bg-white hover:text-[#2d69d6] sm:inline-flex sm:text-[12px]"
          >
            Design today
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm text-white/70"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
