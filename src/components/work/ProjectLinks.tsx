import { Apple, ArrowUpRight, Globe, Play } from "lucide-react";
import type { ProjectLink } from "@/types/content";

const linkIcon = {
  site: Globe,
  ios: Apple,
  android: Play,
} as const;

function LinkButton({ link, context }: { link: ProjectLink; context: string }) {
  const Icon = linkIcon[link.kind];

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-line-strong bg-surface px-3 font-mono text-[12px] text-fg transition-colors duration-150 hover:border-accent hover:text-accent"
    >
      <Icon size={14} aria-hidden="true" />
      {link.label}
      <ArrowUpRight size={12} aria-hidden="true" className="text-subtle" />
      <span className="sr-only">— {context} (opens in a new tab)</span>
    </a>
  );
}

/**
 * A panel, not a footnote: these public listings are the strongest proof on
 * the page. Renders one row per brand when links carry a `group`.
 * Nothing renders without links — no placeholder, no invented URL.
 */
export function ProjectLinks({
  links,
  note,
  name,
  title = "Live links",
  className = "",
}: {
  links: ProjectLink[];
  note?: string;
  name: string;
  title?: string;
  className?: string;
}) {
  if (links.length === 0 && !note) return null;

  const groups = links.reduce<Map<string, ProjectLink[]>>((acc, link) => {
    const key = link.group ?? "";
    acc.set(key, [...(acc.get(key) ?? []), link]);
    return acc;
  }, new Map());

  return (
    <div className={`rounded-sm border border-line bg-bg p-4 sm:p-5 ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{title}</p>

      <ul className="mt-3.5 space-y-3">
        {[...groups].map(([group, groupLinks]) => (
          <li key={group} className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {group ? (
              <span className="min-w-[9rem] font-mono text-[11px] uppercase tracking-[0.12em] text-subtle">
                {group}
              </span>
            ) : null}
            <span className="flex flex-wrap gap-2">
              {groupLinks.map((link) => (
                <LinkButton key={link.href} link={link} context={group || name} />
              ))}
            </span>
          </li>
        ))}
      </ul>

      {note ? <p className="mt-3.5 text-[12px] leading-relaxed text-subtle">{note}</p> : null}
    </div>
  );
}
