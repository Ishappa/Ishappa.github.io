import { CreditCard, Layers, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { impact } from "@/data/impact";

const metricIcon: Record<string, typeof TrendingUp> = {
  "Lighthouse performance": TrendingUp,
  "Faster mobile cold start": Zap,
  "Monthly users reached": Users,
  "Payment integration": CreditCard,
  "Component library, faster delivery": Layers,
  "Critical production incidents": ShieldCheck,
};

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
        {impact.map((item, i) => {
          const Icon = metricIcon[item.label];
          return (
            <Reveal as="li" key={item.label} delay={i * 50} className="bg-bg p-5 sm:p-7">
              <div className="flex items-center gap-2.5">
                {Icon ? (
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-accent-soft">
                    <Icon size={14} aria-hidden="true" className="text-accent" />
                  </span>
                ) : null}
                <p className="font-mono text-[1.6rem] font-medium leading-none tracking-[-0.03em] text-accent sm:text-[1.9rem]">
                  {item.metric}
                </p>
              </div>
              <h3 className="mt-3.5 text-[15px] font-medium tracking-[-0.01em]">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
