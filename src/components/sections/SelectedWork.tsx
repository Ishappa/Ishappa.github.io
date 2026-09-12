import { FeatureProjectCard } from "@/components/work/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { featuredProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <Section
      id="work"
      number="02"
      label="Selected Product Experience"
      title="Production work, mobile and web"
      description="Client applications running in production for international retail brands across GCC markets. Every project below is client or company work — details are limited to what my resume already states."
    >
      <div className="space-y-6 sm:space-y-8">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <FeatureProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
