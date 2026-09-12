import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { impact } from "@/data/impact";

export function Impact() {
  return (
    <Section
      id="impact"
      number="03"
      label="Engineering Impact"
      tone="alt"
      title="Measured outcomes"
      description="Numbers reported here are the ones recorded in my resume — performance, payments, reach, delivery and release quality."
    >
      <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
        {impact.map((item, i) => (
          <Reveal as="li" key={item.label} delay={i * 50} className="bg-bg p-5 sm:p-7">
            <p className="font-mono text-[1.75rem] font-medium leading-none tracking-[-0.03em] text-accent sm:text-[2.125rem]">
              {item.metric}
            </p>
            <h3 className="mt-3.5 flex items-center gap-2.5 text-[15px] font-medium tracking-[-0.01em]">
              <span aria-hidden="true" className="h-px w-4 shrink-0 bg-accent" />
              {item.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
