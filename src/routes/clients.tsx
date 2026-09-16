import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, KineticHeading } from "@/components/site/PageShell";
import transparencyInternational from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.22.jpeg";
import bBraun from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.22 (1).jpeg";
import championFoods from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.22 (2).jpeg";
import laboserv from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.23.jpeg";
import agrifora from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.23 (1).jpeg";
import zimInstituteOfManagement from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.23 (2).jpeg";
import macrotop from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.23 (3).jpeg";
import wwf from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.24.jpeg";
import zororo from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.24 (1).jpeg";
import africanWildlifeFoundation from "@/assets/partners/WhatsApp Image 2026-09-13 at 15.54.24 (2).jpeg";

const title = "Our Clients | Design Booth Graphics";
const description =
  "Design, branding, corporate wear and gifts made for organisations across Zimbabwe.";

export const Route = createFileRoute("/clients")({
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
  component: ClientsPage,
});

const CLIENTS = [
  { name: "Transparency International Zimbabwe", image: transparencyInternational },
  { name: "B|Braun Zimbabwe Private Limited", image: bBraun },
  { name: "Champion Foods", image: championFoods },
  { name: "Laboserv", image: laboserv },
  { name: "Agrifora", image: agrifora },
  { name: "Zimbabwe Institute of Management", image: zimInstituteOfManagement },
  { name: "African Wildlife Foundation", image: macrotop },
  { name: "Macrotop Zimbabwe (Pvt) Ltd", image: wwf },
  { name: "WWF Zimbabwe", image: zororo },
  { name: "Zororo Memorial Park", image: africanWildlifeFoundation },
];

function ClientsPage() {
  return (
    <PageShell>
      <KineticHeading
        tag="Our clients"
        lines={["Made for", "the people", "you meet"]}
        sub="From first impression to everyday wear, we help organisations show up with confidence."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((client, index) => (
            <motion.article
              key={client.name}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: index * 0.08 }}
              className="group bg-background p-5 transition-colors hover:bg-surface sm:p-7"
            >
              <div className="grid aspect-square place-items-center overflow-hidden rounded-2xl border border-border bg-white p-5 transition-transform duration-500 group-hover:scale-[1.02] sm:p-8">
                <img
                  src={client.image}
                  alt={`${client.name} logo`}
                  loading={index < 3 ? "eager" : "lazy"}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{client.name}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
