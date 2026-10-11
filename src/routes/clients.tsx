import { createFileRoute } from "@tanstack/react-router";
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

      <section aria-label="Our clients" className="overflow-hidden border-y border-border py-6">
        <div className="marquee-track motion-reduce:animate-none flex w-max gap-4">
          {[0, 1].map((duplicate) => (
            <div key={duplicate} aria-hidden={duplicate === 1} className="flex shrink-0 gap-4">
              {CLIENTS.map((client) => (
                <article
                  key={client.name}
                  className="w-56 rounded-2xl border border-border bg-white p-4 sm:w-64"
                >
                  <div className="grid h-28 place-items-center">
                    <img
                      src={client.image}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">{client.name}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
