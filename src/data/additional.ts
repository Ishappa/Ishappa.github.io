import type { WorkItem } from "@/types/content";

/** Backend work that doesn't warrant a full case study but is real and worth listing. */
export const backendWork: (WorkItem & { tech: string[]; label: string })[] = [
  {
    title: "AEM Migration Proof of Concept (Java)",
    label: "Client Proof of Concept",
    detail:
      "Built an AEM migration proof of concept in Java for an enterprise storefront, with custom components, Sling Servlets and OSGi services. The client evaluated it and chose a React/Next.js rebuild instead, which was then delivered to production.",
    tech: ["Java", "AEM", "Sling Servlets", "OSGi", "Core Components", "HTL"],
  },
  {
    title: "cWarmer, Codilar's SaaS Cache-Warming Platform",
    label: "Internal Product",
    detail:
      "Contributed backend functionality to cWarmer, an internal SaaS product that keeps e-commerce storefronts pre-cached so pages don't load cold. Built and integrated dashboard REST APIs and supporting services for cache-status tracking and warmer-bot configuration.",
    tech: ["Java", "Spring Boot", "REST APIs"],
  },
];

/**
 * Three deliberately separate tiers. AI-assisted coding is tooling;
 * it is not presented as having built an AI platform.
 */
export const aiTiers: {
  tier: string;
  kicker: string;
  points: string[];
  tech: string[];
  projectSlug?: string;
}[] = [
  {
    tier: "AI-Assisted Development",
    kicker: "Tooling used daily",
    points: [
      "Use Claude Code and GitHub Copilot daily for feature work, code review, debugging and documentation on production React/Next.js, React Native, Java and Python codebases.",
      "Certified in Claude Code: Software Engineering with Generative AI Agents (Vanderbilt University, Coursera, 2026), applying prompt design, structured and tool-calling outputs, and review of AI-generated code to daily work.",
    ],
    tech: ["Claude Code", "GitHub Copilot"],
  },
  {
    tier: "AI Feature Development",
    kicker: "An AI feature being added to a working non-AI tool",
    points: [
      "Built PerfLens as a working CLI first: performance snapshot capture, pre/post diffing, and automatic PR/MR regression comments across GitLab, GitHub and Bitbucket, for both web and React Native.",
      "A Claude-based agent for AI root-cause analysis, which links a regression to the files that changed, is the current in-development phase. It is planned to stay outside the CI gating path so the deterministic check keeps working without it.",
    ],
    tech: ["Node.js", "TypeScript", "Claude API (in development)"],
    projectSlug: "perflens",
  },
  {
    tier: "LLM Application Development",
    kicker: "A backend built around an LLM",
    points: [
      "Built an LLM tool-calling backend on FastAPI letting business users query live enterprise data in plain language. The client used this proof of concept to approve a broader AI initiative.",
      "Tool schemas are generated from Pydantic models, model output is validated as untrusted input, an iteration cap keeps latency and cost bounded, and every figure comes from a live tool result.",
    ],
    tech: ["Python", "FastAPI", "Pydantic", "Claude API", "Gemini API", "Tool Calling"],
    projectSlug: "ai-enterprise-data-assistant",
  },
];
