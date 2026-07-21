import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, experience, education and career direction of Alberto Fernández.",
};

const technicalAreas = [
  "Software Engineering",
  "Python",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Web Development",
  "APIs and backend systems",
  "MLOps and software delivery",
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <PageIntro
        eyebrow="About me"
        title="Software developer building towards Data Science and AI Engineering"
        description="I combine professional experience in software development with an academic and technical path focused on Data Science, Machine Learning and Artificial Intelligence."
      />

      <section className="mt-16 grid gap-10 border-t border-border pt-12 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="text-2xl font-semibold tracking-tight">
          Professional background
        </h2>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            I have worked professionally as a web developer since 2021,
            contributing to real production projects and collaborating within
            multidisciplinary software teams.
          </p>

          <p>
            My professional experience includes frontend and backend
            development, Drupal-based platforms, component implementation,
            automated testing, quality assurance, continuous integration and
            containerised development environments.
          </p>

          <p>
            This experience has given me a practical understanding of software
            delivery, maintainable code, collaboration, debugging and the
            technical discipline required to work on long-term production
            systems.
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <article className="border border-border bg-surface p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Experience
          </p>

          <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            Web Developer
          </h2>

          <p className="mt-2 font-medium text-foreground">Metadrop</p>

          <p className="mt-1 text-sm text-muted">2021 — Present</p>

          <p className="mt-6 leading-7 text-muted">
            Development and maintenance of professional web platforms using
            technologies such as Drupal, Twig, SCSS, JavaScript, Docker,
            Composer, automated testing and continuous integration.
          </p>
        </article>

        <article className="border border-border bg-surface p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Education
          </p>

          <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            Bachelor&apos;s Degree in Applied Data Science
          </h2>

          <p className="mt-2 font-medium text-foreground">
            Universitat Oberta de Catalunya
          </p>

          <p className="mt-1 text-sm text-muted">Currently studying</p>

          <p className="mt-6 leading-7 text-muted">
            Academic training in statistics, databases, data modelling,
            Machine Learning, Bayesian inference, Big Data, data
            visualisation and the development of data products.
          </p>
        </article>
      </section>

      <section className="mt-16 grid gap-10 border-t border-border pt-12 lg:grid-cols-[0.75fr_1.25fr]">
        <h2 className="text-2xl font-semibold tracking-tight">
          Transition towards AI
        </h2>

        <div className="space-y-6 text-lg leading-8 text-muted">
          <p>
            My current development is focused on connecting my software
            engineering experience with Data Science, Machine Learning and
            Artificial Intelligence.
          </p>

          <p>
            I am building end-to-end projects that go beyond model training and
            include data preparation, APIs, testing, interfaces, deployment and
            software architecture.
          </p>

          <p>
            My long-term goal is to work on reliable and scalable AI products,
            particularly in financial services, banking technology and
            data-intensive software environments.
          </p>
        </div>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Technical direction
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight">
            Areas I am currently developing
          </h2>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {technicalAreas.map((area) => (
            <li
              key={area}
              className="border border-border bg-background px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border border-border bg-surface p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Career direction
        </p>

        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight">
          Building the bridge between software engineering, data and applied AI
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          I am preparing for professional opportunities in AI Engineering,
          Machine Learning Engineering and Data Science, with a particular
          interest in BBVA, Santander and other technology-driven financial
          organisations.
        </p>
      </section>
    </div>
  );
}