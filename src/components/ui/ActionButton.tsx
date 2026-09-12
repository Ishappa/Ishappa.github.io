import type { ReactNode } from "react";
import { isPlaceholder } from "@/data/profile";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-accent",
  secondary: "border border-line-strong text-fg hover:border-fg hover:bg-surface",
  ghost: "text-muted hover:text-fg",
};

export function ActionButton({
  href,
  children,
  variant = "secondary",
  icon,
  download,
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  download?: boolean;
  external?: boolean;
  className?: string;
}) {
  /**
   * A link whose URL hasn't been supplied yet renders as visibly pending
   * rather than pointing somewhere invented or broken.
   */
  if (isPlaceholder(href)) {
    return (
      <span
        aria-disabled="true"
        title="URL not added yet"
        className={`${base} cursor-not-allowed border border-dashed border-line-strong text-subtle ${className}`}
      >
        {icon}
        {children}
        <span className="font-mono text-[10px] uppercase tracking-wider">· pending</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      {...(download ? { download: "" } : {})}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
