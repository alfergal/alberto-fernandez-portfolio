import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

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
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}