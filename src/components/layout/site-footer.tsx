const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/alfergal",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alberto-fernandez-galvez/",
  },
  {
    label: "Email",
    href: "mailto:albertofer1997@gmail.com",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">
            © {new Date().getFullYear()} Alberto Fernández
          </p>

          <p className="mt-1 text-sm text-muted">
            Software Development · Data Science · Artificial Intelligence
          </p>
        </div>

        <nav aria-label="Professional links">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith("https://");

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}