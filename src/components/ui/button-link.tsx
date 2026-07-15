import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex min-h-12 items-center justify-center px-6 py-3 font-medium transition-colors duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary-hover hover:text-primary-hover-foreground"
      : "border border-border bg-background text-foreground hover:border-accent hover:bg-surface hover:text-accent";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}