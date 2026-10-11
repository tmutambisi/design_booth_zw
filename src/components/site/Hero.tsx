import { motion } from "motion/react";
import corporateApparel from "@/assets/images/CW-AV-186-A-CW-AV-186-A-W-MOGR42_DEFAULT.jpg";
import executiveGiftSet from "@/assets/images/GF-AV-1177-B-DEFAULT_DEFAULT.jpg";
import outdoorGazebo from "@/assets/images/DISPLAY-2068-DEFAULT_DEFAULT.jpg";
import thermalTumblers from "@/assets/images/DR-AC-298-B-DEFAULT_DEFAULT.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f3f3f1] pt-32 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="lg:pb-4">
          <h1 className="display max-w-[620px] text-[clamp(2.8rem,6.2vw,6.5rem)] leading-[0.88] tracking-[-0.06em] text-[#0f1d3a]">
            Branded gifts.
            <br />
            Print.
            <br />
            <span className="text-[#2d69d6]">Branding.</span>
          </h1>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[#475569]">
            Corporate gifts, branded wear and print that put your business in the room. Sourced,
            branded and delivered in Harare and across Zimbabwe.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#2d69d6] px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_20px_rgba(45,105,214,0.25)] transition-opacity hover:opacity-90"
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="rounded-full border border-[#d5d7dd] bg-white/60 px-7 py-3.5 text-sm font-medium text-[#1f2a3d] transition-colors hover:border-[#2d69d6] hover:text-[#2d69d6]"
            >
              Explore products
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:pt-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid aspect-[1.18] w-full max-w-[690px] grid-cols-[1.15fr_0.85fr] grid-rows-3 gap-3 sm:gap-4"
          >
            <div className="row-span-3 min-h-0 overflow-hidden rounded-[2rem] border border-[#dfe3ea] bg-white shadow-[0_30px_60px_rgba(15,29,58,0.12)]">
              <img
                src={corporateApparel}
                alt="Branded corporate wear"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-h-0 overflow-hidden rounded-[1.5rem] border border-[#dfe3ea] bg-white shadow-[0_20px_40px_rgba(15,29,58,0.1)]">
              <img
                src={executiveGiftSet}
                alt="Branded executive gift set"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-h-0 overflow-hidden rounded-[1.5rem] border border-[#dfe3ea] bg-white shadow-[0_20px_40px_rgba(15,29,58,0.1)]">
              <img
                src={thermalTumblers}
                alt="Branded thermal drinkware"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-h-0 overflow-hidden rounded-[1.5rem] border border-[#dfe3ea] bg-white shadow-[0_20px_40px_rgba(15,29,58,0.1)]">
              <img
                src={outdoorGazebo}
                alt="Branded outdoor event gazebo"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
