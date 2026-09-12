import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechTag";
import { aiTiers } from "@/data/additional";
import { basePath } from "@/lib/site";

export function AiEngineering() {
  return (
    <Section
      id="ai"
      number="07"
      label="AI & Engineering Tooling"
      tone="alt"
      title="Where AI fits in my work"
      description="Kept in three separate tiers on purpose: the tools I code with, an AI feature inside a non-AI product, and one backend actually built around an LLM."
    >
      <ol className="space-y-px overflow-hidden rounded-sm border border-line bg-line">
        {aiTiers.map((tier, i) => (
          <Reveal as="li" key={tier.tier} delay={i * 50} className="bg-bg p-5 sm:p-7">
            <div className="grid gap-5 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Tier {i + 1}
                </p>
                <h3 className="mt-2 text-base font-medium tracking-[-0.015em]">{tier.tier}</h3>
                <p className="mt-1 text-[13px] text-subtle">{tier.kicker}</p>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {tier.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2 before:bg-line-strong"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
                  <TechList items={tier.tech} />
                  {tier.projectSlug ? (
                    <a
                      href={`${basePath}/work/${tier.projectSlug}/`}
                      className="inline-flex items-center gap-1 font-mono text-[12px] text-muted transition-colors duration-150 hover:text-accent"
                    >
                      Case study
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
