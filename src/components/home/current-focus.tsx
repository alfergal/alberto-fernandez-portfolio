const focusAreas = [
  {
    number: "01",
    title: "AI Engineering",
    description:
      "Building reliable AI-powered software by combining Python, APIs, testing, deployment and software architecture.",
  },
  {
    number: "02",
    title: "Data Science & Machine Learning",
    description:
      "Developing predictive models, analysing complex data and transforming technical work into usable data products.",
  },
  {
    number: "03",
    title: "Banking Technology",
    description:
      "Preparing for technical roles in financial organisations where software, data, risk and Artificial Intelligence converge.",
  },
];

export function CurrentFocus() {
  return (
    <section
      aria-labelledby="current-focus-title"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Current direction
          </p>

          <h2
            id="current-focus-title"
            className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Building at the intersection of software, data and AI
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            My current roadmap is focused on extending my software-development
            experience with the technical foundations required to build,
            deploy and maintain production-ready data and AI systems.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.number} className="bg-background p-8 sm:p-10">
              <p className="text-sm font-semibold text-accent">
                {area.number}
              </p>

              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {area.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}