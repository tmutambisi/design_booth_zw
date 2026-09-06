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
            Design Booth Graphics (Pvt) Ltd is a wholly Zimbabwean owned design and print company
            with a quality focus dedicated to service excellence by marketing our clients in the
            most creative and credible way. Our design studio boasts young talent endowed with
            competitive passion and enthusiasm.
          </p>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            <div className="bg-surface p-7">
              <span className="tag">Vision</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To become the most preferred one stop shop for design, print and branding; providing
                the highest turnkey advertising solutions nationwide with global recognition amongst
                the best.
              </p>
            </div>
            <div className="bg-surface p-7">
              <span className="tag">Mission</span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To offer supreme, novel, over the top perpetual graphic design services tailor made
                to suit clientele needs through harnessing our design talents and contemporary
                technologies.
              </p>
            </div>
          </div>

          <div>
            <span className="tag">Philosophy</span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The Design Booth Graphics values the customer as the king and delivers services
              according to particular customer needs, with expert graphic designing advice to make
              the final product phenomenal with the best touch of originality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
