import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";

export function Credentials() {
  return (
    <Section
      id="credentials"
      number="08"
      label="Credentials"
      title="Certifications & education"
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Certifications
          </h3>
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {certifications.map((cert) => (
              <li key={cert.name} className="py-4">
                <p className="text-[15px] font-medium leading-snug tracking-[-0.01em]">
                  {cert.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer}
                  <span aria-hidden="true" className="px-2 text-line-strong">
                    ·
                  </span>
                  <span className="font-mono text-[12px]">{cert.year}</span>
                </p>
                {cert.detail ? (
                  <p className="mt-1 font-mono text-[11px] text-subtle">{cert.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={60}>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
            Education
          </h3>
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {education.map((entry) => (
              <li key={entry.degree} className="py-4">
                <p className="text-[15px] font-medium leading-snug tracking-[-0.01em]">
                  {entry.degree}
                </p>
                <p className="mt-1 text-sm text-muted">{entry.institution}</p>
                <p className="mt-1 font-mono text-[12px] text-subtle">{entry.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
