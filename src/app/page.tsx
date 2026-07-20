import { FeaturedProjects } from "@/components/home/featured-projects";
import { ButtonLink } from "@/components/ui/button-link";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Software Development · Data Science · Artificial Intelligence
          </p>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Alberto Fernández
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-muted sm:text-2xl">
            Software developer building a professional path towards Data Science,
            Machine Learning and AI Engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/projects">View projects</ButtonLink>

            <ButtonLink href="/about" variant="secondary">
              About me
            </ButtonLink>
          </div>
        </div>
      </section>

      <FeaturedProjects />
    </>
  );
}