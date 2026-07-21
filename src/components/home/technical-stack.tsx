const stackGroups = [
  {
    title: "Software Development",
    description:
      "Technologies used across professional web development and personal software projects.",
    technologies: [
      "Drupal",
      "PHP",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Twig",
      "SCSS",
    ],
  },
  {
    title: "Data Science & AI",
    description:
      "Tools used for data analysis, Machine Learning projects and model integration.",
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "FastAPI",
      "Gradio",
      "Streamlit",
      "SQL",
      "Bayesian Modelling",
    ],
  },
  {
    title: "Engineering & Delivery",
    description:
      "Development practices and tools for building, validating and delivering reliable software.",
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Composer",
      "Pytest",
      "ESLint",
      "CI/CD",
      "Automated Testing",
    ],
  },
];

export function TechnicalStack() {
  return (
    <section
      aria-labelledby="technical-stack-title"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Technical toolkit
          </p>

          <h2
            id="technical-stack-title"
            className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Technologies across software development, data and AI
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            My current toolkit combines technologies used professionally with
            those I am developing through academic work and end-to-end
            Data Science and Artificial Intelligence projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="border border-border bg-background p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {group.title}
              </h3>

              <p className="mt-4 leading-7 text-muted">
                {group.description}
              </p>

              <ul
                className="mt-8 flex flex-wrap gap-2"
                aria-label={`${group.title} technologies`}
              >
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}