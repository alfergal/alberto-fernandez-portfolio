import Link from "next/link";

const projects = [
  {
    title: "LoanOps",
    category: "Machine Learning · Risk Analytics",
    description:
      "An end-to-end Machine Learning project for loan risk analysis, including modelling, API development, testing and an interactive dashboard.",
    technologies: ["Python", "FastAPI", "scikit-learn", "Streamlit"],
  },
  {
    title: "Ganivet Reviewer",
    category: "Natural Language Processing",
    description:
      "A text classification system that evaluates the usefulness of restaurant reviews using NLP, feature engineering and supervised learning.",
    technologies: ["Python", "NLP", "Linear SVC", "Gradio"],
  },
  {
    title: "Professional Portfolio",
    category: "Software Engineering · In progress",
    description:
      "This professional personal website, built to present my experience, projects, academic background and transition towards Data Science and AI.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export function FeaturedProjects() {
  return (
    <section
      aria-labelledby="featured-projects-title"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Selected work
            </p>

            <h2
              id="featured-projects-title"
              className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Featured projects
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Projects combining software development, data analysis, Machine
              Learning and applied Artificial Intelligence.
            </p>
          </div>

          <Link
            href="/projects"
            className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-border bg-background p-8 transition-colors duration-200 hover:border-accent"
            >
              <p className="text-sm font-semibold text-accent">
                {project.category}
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-5 leading-7 text-muted">
                {project.description}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="border border-border px-3 py-1 text-sm text-muted"
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