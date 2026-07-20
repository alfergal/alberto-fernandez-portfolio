type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status?: string;
};

export function ProjectCard({
  title,
  category,
  description,
  technologies,
  status,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border border-border bg-background p-8 transition-colors duration-200 hover:border-accent">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="text-sm font-semibold text-accent">{category}</p>

        {status && (
          <span className="border border-border px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted">
            {status}
          </span>
        )}
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-7 text-muted">{description}</p>

      <ul
        className="mt-8 flex flex-wrap gap-2"
        aria-label={`Technologies used in ${title}`}
      >
        {technologies.map((technology) => (
          <li
            key={technology}
            className="border border-border px-3 py-1 text-sm text-muted transition-colors group-hover:border-muted"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}