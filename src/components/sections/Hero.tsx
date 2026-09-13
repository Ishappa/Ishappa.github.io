import { ArrowDown, FileDown, Github, Linkedin, Mail, Smartphone, TrendingUp, Users, Zap } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { Container } from "@/components/ui/Container";
import { impact } from "@/data/impact";
import { profile } from "@/data/profile";
import { asset } from "@/lib/site";

/** Pulled from the same verified impact data used in section 03 — a 5-second preview, not a duplicate claim. */
const heroFacts = [
  { icon: Users, ...impact.find((i) => i.label === "Monthly users reached")! },
  { icon: TrendingUp, ...impact.find((i) => i.label === "Lighthouse performance")! },
  { icon: Zap, ...impact.find((i) => i.label === "Faster mobile cold start")! },
  { icon: Smartphone, metric: "Live", label: "On the App Store & Google Play", detail: "" },
];

const facts = [
  { key: "Role", value: "Software Engineer" },
  { key: "Company", value: "Codilar Technologies" },
  { key: "Since", value: "Sep 2023" },
  { key: "Based", value: "Bengaluru, India" },
  { key: "Focus", value: "Mobile & Frontend" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-texture pointer-events-none absolute inset-0" />
      <Container className="relative pb-14 pt-12 sm:pb-20 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
              {profile.location}
              <span aria-hidden="true" className="px-2 text-line-strong">
                /
              </span>
              Codilar Technologies · Since Sep 2023
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-[4.25rem]"
            >
              {profile.name}
            </h1>

            <p className="mt-4 text-xl font-medium tracking-[-0.02em] sm:text-2xl">
              Software Engineer
              <span aria-hidden="true" className="mx-2 text-line-strong">
                —
              </span>
              <span className="text-accent underline decoration-2 underline-offset-[6px]">Mobile &amp; Frontend</span>
            </p>

            <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] text-muted">
              {profile.primaryStack.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span aria-hidden="true" className="text-line-strong">
                      ·
                    </span>
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-[38rem] text-[15px] leading-relaxed text-muted sm:text-base">
              {profile.intro}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {heroFacts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex items-center gap-2 rounded-sm bg-accent-soft px-3 py-2"
                >
                  <fact.icon size={15} aria-hidden="true" className="shrink-0 text-accent" />
                  <span className="font-mono text-[13px] font-medium text-fg">{fact.metric}</span>
                  <span className="text-[13px] text-muted">{fact.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <ActionButton
                href="#work"
                variant="primary"
                icon={<ArrowDown size={15} aria-hidden="true" />}
              >
                View projects
              </ActionButton>
              <ActionButton
                href={asset(profile.links.resume)}
                download
                icon={<FileDown size={15} aria-hidden="true" />}
              >
                Resume
              </ActionButton>
              <ActionButton
                href={profile.links.github}
                external
                icon={<Github size={15} aria-hidden="true" />}
              >
                GitHub
              </ActionButton>
              <ActionButton
                href={profile.links.linkedin}
                external
                icon={<Linkedin size={15} aria-hidden="true" />}
              >
                LinkedIn
              </ActionButton>
              <ActionButton
                href={`mailto:${profile.contact.email}`}
                icon={<Mail size={15} aria-hidden="true" />}
              >
                Contact
              </ActionButton>
            </div>
          </div>

          <dl className="self-start border-t border-line pt-5 font-mono text-[12px] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-1">
            {facts.map((fact) => (
              <div key={fact.key} className="flex justify-between gap-4 py-1.5 lg:block lg:py-2">
                <dt className="uppercase tracking-[0.14em] text-subtle">{fact.key}</dt>
                <dd className="text-right text-fg lg:mt-1 lg:text-left">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
