import { createFileRoute } from "@tanstack/react-router";
import { PageShell, KineticHeading } from "@/components/site/PageShell";
import { Contact } from "@/components/site/Contact";

const title = "Contact Design Booth Graphics | Harare Print & Design";
const description =
  "Make a date with us — call +263 772 659 601, WhatsApp or email sales@thedesignbooth.co.zw. 89 K. Nkrumah Ave, Pax House, Harare.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <KineticHeading
        tag="Contact"
        lines={["Make a date", "with us"]}
        sub="Do you want your design today? Design today."
      />
      <Contact />
    </PageShell>
  );
}
