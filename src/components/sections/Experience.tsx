import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechTag";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      number="04"
      label="Experience"
      title="Where I've contributed"
      description="One company, three streams of work: the mobile apps, the Next.js storefronts, and the multi-region platform behind them."
    >
      <div className="space-y-14">
        {experience.map((role) => (
          <Reveal as="article" key={role.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">
                {role.role}
                <span aria-hidden="true" className="mx-2 font-normal text-line-strong">
                  ·
                </span>
                <span className="font-medium text-muted">{role.company}</span>
              </h3>
              <p className="font-mono text-[12px] text-subtle">
                {role.period}
                <span aria-hidden="true" className="px-2 text-line-strong">
                  /
                </span>
                {role.location}
              </p>
            </div>

            <TechList items={role.tech} className="mt-4" />

            <ol className="mt-8 space-y-10 border-l border-line pl-5 sm:pl-7">
              {role.groups.map((group) => (
                <li key={group.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[calc(1.25rem+3.5px)] top-[0.45rem] h-[7px] w-[7px] rounded-full bg-accent sm:-left-[calc(1.75rem+3.5px)]"
                  />
                  <h4 className="text-[15px] font-medium tracking-[-0.01em]">{group.title}</h4>
                  <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-subtle">
                    {group.tech.join(" · ")}
                  </p>
                  <ul className="mt-3.5 space-y-2.5">
                    {group.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2 before:bg-line-strong"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
