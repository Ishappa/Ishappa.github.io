import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  id,
  number,
  label,
  title,
  description,
  children,
  aside,
  tone = "default",
  className = "",
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Optional right rail, top-aligned with the section heading. */
  aside?: ReactNode;
  /** Alternating tone gives the page rhythm without extra chrome. */
  tone?: "default" | "alt";
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-16 border-t border-line ${tone === "alt" ? "bg-surface" : ""} ${className}`}
    >
      <Container className="py-14 sm:py-20 lg:py-24">
        <div
          className={
            aside ? "grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12" : undefined
          }
        >
          <div className="min-w-0">
            <Reveal as="header" className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                <span className="text-accent">{number}</span>
                <span aria-hidden="true" className="px-2 text-line-strong">
                  /
                </span>
                {label}
              </p>
              <h2
                id={`${id}-heading`}
                className="mt-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl"
              >
                {title}
              </h2>
              {description ? (
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {description}
                </p>
              ) : null}
            </Reveal>
            <div className="mt-9 sm:mt-12">{children}</div>
          </div>

          {aside ? (
            <Reveal delay={80} className="min-w-0">
              {aside}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
