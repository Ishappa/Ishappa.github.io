export type ProjectKind = "production" | "proof-of-concept" | "independent";

export interface StackGroup {
  group: string;
  items: string[];
}

export interface WorkItem {
  title: string;
  detail: string;
}

export interface CaseStudy {
  overview: string;
  context?: string;
  role?: string;
  stack: StackGroup[];
  engineeringWork: WorkItem[];
  /** Only present where the resume names an explicit problem, not a restatement of the work. */
  challenges?: WorkItem[];
  impact?: string[];
}

export type ProjectLinkKind = "site" | "ios" | "android";

export interface ProjectLink {
  kind: ProjectLinkKind;
  label: string;
  href: string;
  /** Optional brand grouping, so several apps can share one link row. */
  group?: string;
}

export interface Project {
  slug: string;
  name: string;
  kind: ProjectKind;
  /** Visible credibility label, e.g. "Production / Client Project". */
  label: string;
  brands?: string[];
  summary: string;
  /** The four-part product-case-study grid shown on the homepage card. */
  product: string;
  challenge: string;
  contribution: string;
  result: string;
  tech: string[];
  /** Public, shipped destinations only. Empty until a real URL is supplied. */
  links?: ProjectLink[];
  /** Heading for the links panel, e.g. "Live on the stores". */
  linksTitle?: string;
  /** Honest footnote for anything not yet publicly linkable. */
  linksNote?: string;
  caseStudy?: CaseStudy;
}

export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  location: string;
  tech: string[];
  groups: {
    title: string;
    tech: string[];
    points: string[];
  }[];
}

export interface SkillCategory {
  name: string;
  items: string[];
  /** Ishappa's own qualifier from the resume, preserved verbatim in spirit. */
  note?: string;
  tier: "primary" | "secondary" | "supporting";
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  detail?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SnapshotPillar {
  label: string;
  headline: string;
  detail: string;
}

export interface ImpactItem {
  metric: string;
  label: string;
  detail: string;
}
