import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software development, Data Science, Machine Learning and Artificial Intelligence projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <PageIntro
        eyebrow="Selected work"
        title="Projects"
        description="A selection of software development, Data Science, Machine Learning and Artificial Intelligence projects, presented with their technical context, architecture and results."
      />

      <section
        aria-label="Project list"
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            category={project.category}
            description={project.description}
            technologies={project.technologies}
            status={project.status}
          />
        ))}
      </section>
    </div>
  );
}