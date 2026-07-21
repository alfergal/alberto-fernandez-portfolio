import Link from "next/link";

const summaryItems = [
  {
    eyebrow: "Professional experience",
    title: "Web Developer at Metadrop",
    period: "2021 — Present",
    description:
      "Professional experience building and maintaining production web platforms, working with Drupal, frontend technologies, automated testing, Docker and continuous integration.",
  },
  {
    eyebrow: "Academic background",
    title: "Bachelor’s Degree in Applied Data Science",
    period: "Currently studying · Universitat Oberta de Catalunya",
    description:
      "Academic training in statistics, databases, Machine Learning, Bayesian inference, Big Data, data visualisation and data-product development.",
  },
];

export function ProfessionalSummary() {
  return (
    <section
      aria-labelledby="professional-summary-title"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Background
          </p>

          <h2
            id="professional-summary-title"
            className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Professional experience supported by a strong data foundation
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            My profile combines practical software-development experience with
            an academic and technical progression towards Data Science,
            Machine Learning and Artificial Intelligence.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
          {summaryItems.map((item) => (
            <article key={item.title} className="bg-background p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                {item.eyebrow}
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-muted">
                {item.period}
              </p>

              <p className="mt-6 leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>

        <Link
          href="/about"
          className="mt-8 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-accent"
        >
          Learn more about my background
          <span aria-hidden="true">&nbsp;→</span>
        </Link>
      </div>
    </section>
  );
}