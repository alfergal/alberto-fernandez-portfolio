import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alberto Fernández for professional opportunities, technical collaborations and conversations about software, data and AI.",
};

const contactMethods = [
  {
    title: "Email",
    description:
      "The most direct channel for professional opportunities, collaborations and technical conversations.",
    href: "mailto:albertofer1997@gmail.com",
    linkLabel: "albertofer1997@gmail.com",
  },
  {
    title: "LinkedIn",
    description:
      "Professional experience, career updates, academic progress and technical publications.",
    href: "https://www.linkedin.com/in/alberto-fernandez-galvez/",
    linkLabel: "View LinkedIn profile",
  },
  {
    title: "GitHub",
    description:
      "Source code, portfolio projects, technical experiments and ongoing development work.",
    href: "https://github.com/alfergal",
    linkLabel: "View GitHub profile",
  },
];

const opportunityAreas = [
  "Software Engineering",
  "Data Science",
  "Machine Learning",
  "AI Engineering",
  "Financial Technology",
  "Technical collaborations",
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <PageIntro
        eyebrow="Get in touch"
        title="Let’s start a conversation"
        description="I am open to professional opportunities, technical collaborations and conversations related to Software Engineering, Data Science, Machine Learning, Artificial Intelligence and banking technology."
      />

      <section
        aria-label="Contact methods"
        className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3"
      >
        {contactMethods.map((method) => {
          const isExternal = method.href.startsWith("https://");

          return (
            <a
              key={method.title}
              href={method.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group bg-background p-8 transition-colors duration-200 hover:bg-surface focus-visible:z-10 sm:p-10"
            >
              <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                {method.title}
              </h2>

              <p className="mt-4 leading-7 text-muted">
                {method.description}
              </p>

              <p className="mt-8 break-words text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                {method.linkLabel}
                <span aria-hidden="true">
                  {isExternal ? " ↗" : " →"}
                </span>
              </p>
            </a>
          );
        })}
      </section>

      <section
        aria-labelledby="opportunities-title"
        className="mt-16 border border-border bg-surface p-8 sm:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Professional interests
            </p>

            <h2
              id="opportunities-title"
              className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Areas where I am interested in contributing
            </h2>

            <p className="mt-5 leading-7 text-muted">
              I am particularly interested in roles and projects that combine
              strong software-engineering practices with data, Machine Learning
              and applied Artificial Intelligence.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {opportunityAreas.map((area) => (
              <li
                key={area}
                className="border border-border bg-background px-5 py-4 text-sm font-semibold"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="mt-10 max-w-2xl text-sm leading-6 text-muted">
        For the fastest response, contact me directly at{" "}
        <a
          href="mailto:albertofer1997@gmail.com"
          className="font-semibold text-foreground transition-colors hover:text-accent"
        >
          albertofer1997@gmail.com
        </a>
        .
      </p>
    </div>
  );
}