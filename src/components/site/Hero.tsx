import { motion } from "motion/react";
import corporateApparel from "@/assets/images/CW-AV-186-A-CW-AV-186-A-W-MOGR42_DEFAULT.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#f3f3f1] pt-32 pb-16 sm:pt-36 sm:pb-24 lg:min-h-[calc(100vh-4rem)]">
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="lg:pb-4">
          <h1 className="display max-w-[620px] text-[clamp(4rem,7vw,10rem)] leading-[0.86] tracking-[-0.055em] text-[#0f1d3a]">
            We craft your
            <br />
            brand&apos;s
            <br />
            <span className="text-[#2d69d6]">IDENTITY</span>
          </h1>

          <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-[#475569]">
            Design · Print · Brand — everything under one roof, in Harare.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#2d69d6] px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_20px_rgba(45,105,214,0.25)] transition-opacity hover:opacity-90"
            >
              Design today
            </a>
            <a
              href="#services"
              className="rounded-full border border-[#d5d7dd] bg-white/60 px-7 py-3.5 text-sm font-medium text-[#1f2a3d] transition-colors hover:border-[#2d69d6] hover:text-[#2d69d6]"
            >
              Get a quote
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[690px] overflow-hidden rounded-[2rem] border border-[#dfe3ea] bg-[#313e50] shadow-[0_30px_60px_rgba(15,29,58,0.16)]"
          >
            <img
              src={corporateApparel}
              alt="Executive Corporate Uniforms & Embroidered Apparel by Design Booth Graphics"
              width={1200}
              height={1200}
              className="aspect-[1.18] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
