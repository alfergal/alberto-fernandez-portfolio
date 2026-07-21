import { ButtonLink } from "@/components/ui/button-link";

const professionalLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alberto-fernandez-galvez/",
  },
  {
    label: "GitHub",
    href: "https://github.com/alfergal",
  },
];

export function HomeCta() {
  return (
    <section
      aria-labelledby="home-cta-title"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="border border-border bg-surface p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Let&apos;s connect
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div className="max-w-3xl">
              <h2
                id="home-cta-title"
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Open to opportunities in software, data and applied AI
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted">
                I am interested in professional opportunities, technical
                collaborations and conversations related to Software
                Engineering, Data Science, Machine Learning, AI Engineering and
                banking technology.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <ButtonLink href="/contact">Contact me</ButtonLink>

              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {professionalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                      <span aria-hidden="true">&nbsp;↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}