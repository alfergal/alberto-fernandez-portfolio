"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link
          href="/"
          className="whitespace-nowrap font-semibold tracking-tight transition-colors hover:text-accent"
        >
          Alberto Fernández
        </Link>

        <div className="flex items-center gap-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isActive
                        ? "border-b-2 border-accent pb-1 text-sm font-semibold text-foreground"
                        : "border-b-2 border-transparent pb-1 text-sm font-medium text-muted transition-colors hover:border-border hover:text-foreground"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}