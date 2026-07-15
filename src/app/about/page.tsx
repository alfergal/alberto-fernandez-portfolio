import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, experience, education and career direction of Alberto Fernández.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <PageIntro
        eyebrow="About me"
        title="Developer transitioning into Data Science and AI"
        description="I am a software developer with professional experience in web development and an academic path focused on Data Science, Artificial Intelligence and Machine Learning."
      />

      <section className="mt-16 border-t border-border pt-10">
        <p className="max-w-3xl text-lg leading-8 text-muted">
          This page will present my professional experience, academic background,
          technical skills and long-term career direction.
        </p>
      </section>
    </div>
  );
}