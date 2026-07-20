import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alberto Fernández for professional, technical and academic opportunities.",
};

const contactMethods = [
  {
    title: "Email",
    description:
      "For professional opportunities, collaborations and technical conversations.",
    href: "mailto:albertofer1997@gmail.com",
    linkLabel: "albertofer1997@gmail.com",
  },
  {
    title: "LinkedIn",
    description:
      "Professional experience, career updates and technical publications.",
    href: "https://www.linkedin.com/in/alberto-fernandez-galvez/",
    linkLabel: "View LinkedIn profile",
  },
  {
    title: "GitHub",
    description:
      "Source code, portfolio projects and technical experiments.",
    href: "https://github.com/alfergal",
    linkLabel: "View GitHub profile",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <PageIntro
        eyebrow="Get in touch"
        title="Contact"
        description="I am open to professional opportunities, technical collaborations and conversations related to Software Engineering, Data Science, Machine Learning and Artificial Intelligence."
      />

      <section className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
        {contactMethods.map((method) => {
          const isExternal = method.href.startsWith("https://");

          return (
            <a
              key={method.title}
              href={method.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="group bg-background p-8 transition-colors duration-200 hover:bg-surface focus-visible:z-10"
            >
              <h2 className="text-xl font-semibold transition-colors group-hover:text-accent">
                {method.title}
              </h2>

              <p className="mt-4 leading-7 text-muted">
                {method.description}
              </p>

              <p className="mt-8 break-words text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                {method.linkLabel}
                <span aria-hidden="true"> →</span>
              </p>
            </a>
          );
        })}
      </section>
    </div>
  );
}