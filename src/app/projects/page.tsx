import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software development, Data Science, Machine Learning and Artificial Intelligence projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <PageIntro
        eyebrow="Selected work"
        title="Projects"
        description="A selection of software development, Data Science, Machine Learning and Artificial Intelligence projects, presented with their technical context, architecture and results."
      />

      <section className="mt-16 border-t border-border pt-10">
        <p className="text-muted">Projects will be added here.</p>
      </section>
    </div>
  );
}