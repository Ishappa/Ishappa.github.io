import { Code2, ShoppingBag, Smartphone, Wrench } from "lucide-react";
import { CurrentWorkCard } from "@/components/work/CurrentWorkCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { snapshot } from "@/data/snapshot";

const pillarIcon: Record<string, typeof Smartphone> = {
  Mobile: Smartphone,
  Frontend: Code2,
  Product: ShoppingBag,
  Engineering: Wrench,
};

export function Snapshot() {
  return (
    <Section
      id="snapshot"
      number="01"
      label="Engineering Snapshot"
      title="What I build"
      description="Production applications for global e-commerce brands — mobile first, then the web storefronts and the engineering behind both."
      aside={<CurrentWorkCard />}
    >
      <Reveal className="mb-10 max-w-[46rem] space-y-4 sm:mb-12">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-[15px] leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <ol className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
        {snapshot.map((pillar, i) => (
          <Reveal as="li" key={pillar.label} delay={i * 60} className="bg-surface p-5 sm:p-7">
            <div className="flex items-center gap-2">
              {(() => {
                const Icon = pillarIcon[pillar.label];
                return Icon ? <Icon size={16} aria-hidden="true" className="text-accent" /> : null;
              })()}
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {pillar.label}
              </p>
            </div>
            <h3 className="mt-3 text-lg font-medium tracking-[-0.015em]">{pillar.headline}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{pillar.detail}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
