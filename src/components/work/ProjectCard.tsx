import { ArrowUpRight } from "lucide-react";
import { TechList } from "@/components/ui/TechTag";
import { ProjectLinks } from "@/components/work/ProjectLinks";
import type { Project } from "@/types/content";
import { basePath } from "@/lib/site";

const caseStudyHref = (slug: string) => `${basePath}/work/${slug}/`;

/** An elevated card per production/client project. */
export function FeatureProjectCard({ project, index }: { project: Project; index: number }) {
  const parts = [
    { label: "Product", value: project.product },
    { label: "Engineering challenge", value: project.challenge },
    { label: "Contribution", value: project.contribution },
    { label: "Result", value: project.result },
  ];

  return (
    <article className="group rounded-sm border border-line bg-surface p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow] duration-200 hover:border-line-strong hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-sm bg-accent px-1.5 font-mono text-[11px] font-medium text-bg">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          {project.label}
        </p>
        {project.brands ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
            {project.brands.join(" · ")}
          </p>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-xl font-semibold tracking-[-0.025em] sm:text-[1.7rem]">
          {project.caseStudy ? (
            <a
              href={caseStudyHref(project.slug)}
              className="transition-colors duration-150 hover:text-accent"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        {project.caseStudy ? (
          <a
            href={caseStudyHref(project.slug)}
            className="inline-flex items-center gap-1 font-mono text-[12px] text-muted transition-colors duration-150 hover:text-accent"
          >
            Case study
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">for {project.name}</span>
          </a>
        ) : null}
      </div>

      <p className="mt-3 max-w-[46rem] text-[15px] leading-relaxed text-muted">{project.summary}</p>

      <dl className="mt-7 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {parts.map((part) => (
          <div key={part.label} className="border-l-2 border-line pl-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
              {part.label}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-fg">{part.value}</dd>
          </div>
        ))}
      </dl>

      <TechList items={project.tech} className="mt-7" />

      <ProjectLinks
        links={project.links ?? []}
        note={project.linksNote}
        name={project.name}
        title={project.linksTitle}
        className="mt-6"
      />
    </article>
  );
}
