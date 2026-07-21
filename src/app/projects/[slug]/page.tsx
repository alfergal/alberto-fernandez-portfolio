import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <Link
        href="/projects"
        className="text-sm font-semibold text-muted transition-colors hover:text-accent"
      >
        ← Back to projects
      </Link>

      <header className="mt-10 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>

        <div className="mt-5 flex flex-wrap items-start gap-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          {project.status && (
            <span className="border border-border px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted">
              {project.status}
            </span>
          )}
        </div>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-muted">
          {project.description}
        </p>

        <ul
          className="mt-8 flex flex-wrap gap-2"
          aria-label={`Technologies used in ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="border border-border px-3 py-1 text-sm text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary-hover hover:text-primary-hover-foreground"
              >
                View source code
                <span aria-hidden="true">&nbsp;↗</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:border-accent hover:bg-surface hover:text-accent"
              >
                View live demo
                <span aria-hidden="true">&nbsp;↗</span>
              </a>
            )}
          </div>
        )}
        
      </header>

      <div className="mt-16 space-y-16 border-t border-border pt-10">
        {project.challenge && (
          <section aria-labelledby="project-challenge">
            <h2
              id="project-challenge"
              className="text-2xl font-semibold tracking-tight"
            >
              Challenge
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              {project.challenge}
            </p>
          </section>
        )}

        {project.approach && (
          <section aria-labelledby="technical-approach">
            <h2
              id="technical-approach"
              className="text-2xl font-semibold tracking-tight"
            >
              Technical approach
            </h2>

            <ul className="mt-6 max-w-3xl space-y-4">
              {project.approach.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent pl-5 leading-7 text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.results && (
          <section aria-labelledby="project-results">
            <h2
              id="project-results"
              className="text-2xl font-semibold tracking-tight"
            >
              Results
            </h2>

            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="border border-border bg-surface p-6 leading-7 text-muted"
                >
                  {result}
                </li>
              ))}
            </ul>
          </section>
        )}

        {!project.challenge && !project.approach && !project.results && (
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">
              Project overview
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-muted">
              The complete case study will be added soon.
            </p>
          </section>
        )}
      </div>
    </article>
  );
}