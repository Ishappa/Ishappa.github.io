import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { skills } from "@/data/skills";

export function Toolkit() {
  return (
    <Section
      id="toolkit"
      number="05"
      label="Engineering Toolkit"
      tone="alt"
      title="What I work with"
      description="Listed without ratings or percentages. Where my experience with something is qualified, the qualifier is stated rather than dropped."
    >
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {skills.map((category, i) => (
          <Reveal key={category.name} delay={i * 30}>
            <h3
              className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
                category.tier === "primary" ? "text-accent" : "text-subtle"
              }`}
            >
              {category.name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5">
              {category.items.map((item, index) => (
                <li key={item} className="flex items-center gap-2 text-sm text-fg">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-line-strong">
                      ·
                    </span>
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>
            {category.note ? (
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted">{category.note}</p>
            ) : null}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
