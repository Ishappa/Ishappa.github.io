import { FileDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { asset } from "@/lib/site";

export function Contact() {
  return (
    <Section
      id="contact"
      number="09"
      label="Contact"
      tone="alt"
      title="Get in touch"
      description="Open to product engineering roles in mobile and frontend. The fastest way to reach me is email."
    >
      <Reveal className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-16">
        <dl className="space-y-4">
          <div className="flex items-center gap-3">
            <dt className="sr-only">Email</dt>
            <Mail size={16} aria-hidden="true" className="shrink-0 text-subtle" />
            <dd>
              <a
                href={`mailto:${profile.contact.email}`}
                className="break-all text-[15px] transition-colors duration-150 hover:text-accent"
              >
                {profile.contact.email}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="sr-only">Phone</dt>
            <Phone size={16} aria-hidden="true" className="shrink-0 text-subtle" />
            <dd>
              <a
                href={`tel:${profile.contact.phone.replace(/[^+\d]/g, "")}`}
                className="text-[15px] transition-colors duration-150 hover:text-accent"
              >
                {profile.contact.phone}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="sr-only">Location</dt>
            <MapPin size={16} aria-hidden="true" className="shrink-0 text-subtle" />
            <dd className="text-[15px] text-muted">{profile.location}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2.5">
          <ActionButton
            href={asset(profile.links.resume)}
            download
            variant="primary"
            icon={<FileDown size={15} aria-hidden="true" />}
          >
            Download resume
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
        </div>
      </Reveal>
    </Section>
  );
}
