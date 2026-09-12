import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TechList } from "@/components/ui/TechTag";
import { caseStudies, getProject } from "@/data/projects";
import { basePath } from "@/lib/site";
import type { WorkItem } from "@/types/content";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      title: `${project.name} — Ishappa N`,
      description: project.summary,
      url: `/work/${project.slug}/`,
    },
  };
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-9 sm:py-12">
      <div className="grid gap-5 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
          <span className="text-accent">{number}</span>
          <span aria-hidden="true" className="px-2 text-line-strong">
            /
          </span>
          {title}
        </h2>
        <div className="max-w-[46rem]">{children}</div>
      </div>
    </section>
  );
}

function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <ol className="space-y-6">
      {items.map((item) => (
        <li key={item.title}>
          <h3 className="text-[15px] font-medium tracking-[-0.01em]">{item.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  const study = project.caseStudy;
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <article>
      <Container className="pb-4 pt-10 sm:pt-14">
        <a
          href={`${basePath}/#work`}
          className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted transition-colors duration-150 hover:text-accent"
        >
          <ArrowLeft size={13} aria-hidden="true" />
          All work
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {project.label}
          </p>
          {project.brands ? (
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
              {project.brands.join(" · ")}
            </p>
          ) : null}
        </div>

        <h1 className="mt-3 max-w-[24ch] text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
          {project.name}
        </h1>
        <p className="mt-4 max-w-[46rem] text-[15px] leading-relaxed text-muted sm:text-base">
          {project.summary}
        </p>
        <TechList items={project.tech} className="mt-6" />
      </Container>

      <Container className="pb-16 sm:pb-24">
        <CaseSection number={next()} title="Overview">
          <p className="text-[15px] leading-relaxed text-muted">{study.overview}</p>
        </CaseSection>

        {study.context ? (
          <CaseSection number={next()} title="Context">
            <p className="text-[15px] leading-relaxed text-muted">{study.context}</p>
          </CaseSection>
        ) : null}

        {study.role ? (
          <CaseSection number={next()} title="My role">
            <p className="text-[15px] leading-relaxed text-muted">{study.role}</p>
          </CaseSection>
        ) : null}

        <CaseSection number={next()} title="Technical stack">
          <dl className="space-y-5">
            {study.stack.map((group) => (
              <div key={group.group}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                  {group.group}
                </dt>
                <dd className="mt-2">
                  <TechList items={group.items} />
                </dd>
              </div>
            ))}
          </dl>
        </CaseSection>

        <CaseSection number={next()} title="Engineering work">
          <WorkList items={study.engineeringWork} />
        </CaseSection>

        {study.challenges ? (
          <CaseSection number={next()} title="Challenges">
            <WorkList items={study.challenges} />
          </CaseSection>
        ) : null}

        {study.impact ? (
          <CaseSection number={next()} title="Impact">
            <ul className="space-y-2.5">
              {study.impact.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-[15px] leading-relaxed text-fg before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2 before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>
        ) : null}

        <p className="border-t border-line pt-8 text-[13px] leading-relaxed text-subtle">
          Client and company work. This case study is limited to what my resume already states — no
          internal architecture, credentials, repositories or business information are included.
        </p>
      </Container>
    </article>
  );
}
