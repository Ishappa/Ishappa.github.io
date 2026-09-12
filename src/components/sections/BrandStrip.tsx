import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { brandsWorkedOn } from "@/data/current";

/** A quiet credibility band: whose live products the work went into. */
export function BrandStrip() {
  return (
    <section aria-label="Brands worked on" className="border-y border-line bg-surface">
      <Container className="py-5 sm:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
            Worked on
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-9">
            {brandsWorkedOn.map((brand) => (
              <li key={brand.name} className="text-[15px] font-medium tracking-[-0.01em] sm:text-base">
                {brand.href ? (
                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-fg underline decoration-line-strong decoration-1 underline-offset-[6px] transition-colors duration-150 hover:text-accent hover:decoration-accent"
                  >
                    {brand.name}
                    <ArrowUpRight size={13} aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="text-fg">{brand.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
