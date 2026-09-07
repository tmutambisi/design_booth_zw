import dbgLogo from "@/assets/logo/logo.jpg";

const DETAILS = [
  { label: "Phone", value: "+263 772 659 601", href: "tel:+263772659601" },
  { label: "Phone", value: "+263 718 440 989", href: "tel:+263718440989" },
  { label: "WhatsApp", value: "wa.me/263772659601", href: "https://wa.me/263772659601" },
  {
    label: "Email",
    value: "sales@thedesignbooth.co.zw",
    href: "mailto:sales@thedesignbooth.co.zw",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 sm:p-16">
        <span className="tag">Contact</span>
        <h2 className="display relative mt-5 text-[clamp(2.25rem,6vw,4.5rem)]">
          Make a date
          <br />
          with us
        </h2>
        <p className="relative mt-6 max-w-sm text-[15px] text-muted-foreground">
          Do you want your design today? Design today.
        </p>

        <div className="relative mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {DETAILS.map((d) => (
            <a
              key={d.value}
              href={d.href}
              className="group bg-background p-6 transition-colors hover:bg-surface-2"
            >
              <span className="tag">{d.label}</span>
              <span className="mt-2 block text-sm transition-colors group-hover:text-primary">
                {d.value}
              </span>
            </a>
          ))}
          <div className="bg-background p-6 sm:col-span-2">
            <span className="tag">Studio</span>
            <span className="mt-2 block text-sm">
              89 K. Nkrumah Ave, 4th Floor, Pax House, Harare — serving Harare, Bulawayo and
              nationwide Zimbabwe.
            </span>
          </div>
        </div>

        <a
          href="https://wa.me/263772659601"
          className="relative mt-10 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Order branding
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <img
            src={dbgLogo}
            alt="Design Booth Graphics Logo"
            className="h-6 w-auto object-contain mix-blend-multiply"
          />
          <span className="display text-sm font-semibold">
            Design<span className="text-muted-foreground">Booth</span>
          </span>
          <span className="tag ml-2 hidden sm:inline-block">Make a date with us</span>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <p className="text-xs text-muted-foreground">
            © Design Booth Graphics (Pvt) Ltd. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/60">
            Powered by{" "}
            <span className="font-semibold tracking-widest text-muted-foreground">TUNGASONIC</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
