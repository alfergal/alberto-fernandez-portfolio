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
      </header>

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Project overview
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-muted">
          The complete case study will include the problem, technical approach,
          architecture, implementation process, results and relevant links.
        </p>
      </section>
    </article>
  );
}