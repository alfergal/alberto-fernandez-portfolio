type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
        {description}
      </p>
    </header>
  );
}