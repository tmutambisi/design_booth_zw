import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Techniques } from "@/components/site/Techniques";
import { About } from "@/components/site/About";
import { Contact, SiteFooter } from "@/components/site/Contact";

const title = "Corporate Gifts, Print & Branding | Design Booth Graphics Zimbabwe";
const description =
  "Branded corporate gifts, wearables, print and signage in Harare and nationwide Zimbabwe. Design Booth Graphics helps businesses put their brand in the room.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div id="studio" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Techniques />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
