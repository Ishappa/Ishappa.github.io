import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechTag";
import { backendWork } from "@/data/additional";
import { basePath } from "@/lib/site";

export function AdditionalEngineering() {
  return (
    <Section
      id="backend"
      number="06"
      label="Additional Engineering"
      title="Backend work behind the frontend"
      description="Secondary to my mobile and frontend work, but real production and internal-product contributions in Python and Java."
    >
      <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
        <Reveal className="bg-surface p-5 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            Production / Client Project
          </p>
          <h3 className="mt-2.5 text-lg font-medium tracking-[-0.015em]">
            <a
              href={`${basePath}/work/koton-multi-region-platform/`}
              className="transition-colors duration-150 hover:text-accent"
            >
              Koton — Multi-Region E-Commerce Platform
            </a>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Feature work and production support on a large Django storefront with Jinja2
            server-rendered pages — country and language switching resolved into request context,
            with cache-key correctness to prevent cross-region content leakage.
          </p>
          <TechList items={["Python", "Django", "Jinja2", "Akinon / Omnitron", "REST APIs"]} className="mt-4" />
        </Reveal>

        {backendWork.map((item, i) => (
          <Reveal key={item.title} delay={(i + 1) * 50} className="bg-surface p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
              {item.label}
            </p>
            <h3 className="mt-2.5 text-lg font-medium tracking-[-0.015em]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            <TechList items={item.tech} className="mt-4" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
