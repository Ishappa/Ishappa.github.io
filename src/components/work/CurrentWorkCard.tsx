import { TechList } from "@/components/ui/TechTag";
import { ProjectLinks } from "@/components/work/ProjectLinks";
import { currentWork } from "@/data/current";

export function CurrentWorkCard() {
  return (
    <aside className="border border-line bg-surface p-5">
      <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
        <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        {currentWork.label}
      </p>

      <h3 className="mt-3 text-lg font-medium tracking-[-0.015em]">{currentWork.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{currentWork.detail}</p>

      <TechList items={currentWork.tech} className="mt-4" />
      <ProjectLinks
        links={currentWork.links}
        name={currentWork.name}
        title="Live"
        className="mt-5"
      />
    </aside>
  );
}
