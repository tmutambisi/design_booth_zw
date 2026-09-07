import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";
import { About } from "@/components/site/About";
import { Techniques } from "@/components/site/Techniques";

const title = "About Design Booth Graphics | Zimbabwean Design Studio";
const description =
  "Wholly Zimbabwean owned design, print and branding company in Harare. Our vision, mission, philosophy and values — innovation, quality and integrity.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { step: "Brief", text: "We listen first — your market, your message, your deadline." },
  { step: "Design", text: "Our studio concepts, refines and presents options for approval." },
  { step: "Produce", text: "Print, embroider, foil or engrave — all under one roof." },
  { step: "Deliver", text: "Finished, checked and delivered across Zimbabwe." },
];

function AboutPage() {
  return (
    <PageShell>
      <KineticHeading
        tag="Company profile"
        lines={["We give", "your brand", "a voice"]}
        sub="Zimbabwean owned. Quality focused. Design · Print · Brand — everything under one roof."
      />

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.step}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.08 }}
              className="group bg-background p-8 transition-colors hover:bg-surface"
            >
              <span className="tag">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display mt-4 text-2xl transition-colors group-hover:text-primary">
                {t.step}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <About />
      <Techniques />
    </PageShell>
  );
}
