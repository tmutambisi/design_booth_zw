const VALUES = ["Innovation", "Professionalism", "Quality", "Integrity", "Efficiency"];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="tag">Company profile</span>
          <h2 className="display mt-5 text-[clamp(2rem,5vw,3.5rem)]">
            Wholly Zimbabwean
            <br />
            owned
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {VALUES.map((v) => (
              <span
                key={v}
                className="rounded-full border border-border px-3.5 py-1.5 text-xs text-muted-foreground"
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Design Booth Graphics (Pvt) Ltd is a wholly Zimbabwean-owned partner for branded
            corporate gifts, wearables, print and signage. We help businesses put their brand out
            there through quality products, dependable production and thoughtful finishing.
          </p>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            <div className="bg-surface p-7">
              <span className="tag">Vision</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To become Zimbabwe&apos;s preferred one-stop shop for branded corporate gifts,
                print, signage and brand rollouts.
              </p>
            </div>
            <div className="bg-surface p-7">
              <span className="tag">Mission</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To make it easy for clients to take their brand into the world with useful products,
                reliable print and consistent branding.
              </p>
            </div>
          </div>

          <div>
            <span className="tag">Philosophy</span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We start with what each client needs to put their brand out there, then deliver
              practical, quality pieces with care from production to finishing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
