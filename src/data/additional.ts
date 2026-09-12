import type { WorkItem } from "@/types/content";

/** Backend work that doesn't warrant a full case study but is real and worth listing. */
export const backendWork: (WorkItem & { tech: string[]; label: string })[] = [
  {
    title: "Ooka Storefront — AEM Migration Proof-of-Concept",
    label: "Production / Client Project",
    detail:
      "Built the Ooka AEM migration proof-of-concept in Java — custom components, Sling Servlets and OSGi services — which the client evaluated before committing to the React/Next.js rebuild that was then delivered to production.",
    tech: ["Java", "AEM", "Sling Servlets", "OSGi", "Core Components", "HTL"],
  },
  {
    title: "cWarmer — Codilar's SaaS Cache-Warming Platform",
    label: "Internal Product",
    detail:
      "Contributed basic backend functionality to cWarmer, an internal SaaS product that keeps e-commerce storefronts pre-cached to avoid slow cold page loads — building and integrating dashboard REST APIs and supporting services for cache-status tracking and warmer-bot configuration.",
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
      "Use Claude Code and GitHub Copilot daily across the SDLC — accelerating feature development, code review, debugging and documentation on production React/Next.js, Java and Python codebases.",
      "Certified in Claude Code: Software Engineering with Generative AI Agents (Vanderbilt University, Coursera, 2026), applying prompt design, structured and tool-calling outputs, and review of AI-generated code to daily work.",
    ],
    tech: ["Claude Code", "GitHub Copilot"],
  },
  {
    tier: "AI Feature Development",
    kicker: "An AI feature inside a non-AI tool",
    points: [
      "Added optional AI root-cause analysis to the PerfLens CLI using Groq-hosted Llama, correlating Lighthouse regressions with changed files.",
      "Kept it deliberately non-gating so the CI check itself stays deterministic and works offline, with measured facts and model inference separated in the report.",
    ],
    tech: ["Groq", "Llama", "Node.js", "TypeScript"],
    projectSlug: "perflens",
  },
  {
    tier: "LLM Application Development",
    kicker: "A backend built around an LLM",
    points: [
      "Built an LLM tool-calling backend on FastAPI letting business users query live enterprise data in natural language, delivered as the client proof of concept used to approve a broader AI initiative.",
      "Tool schemas generated from Pydantic models, model output validated as untrusted input, a capped iteration loop bounding latency and cost, and every figure grounded in a live tool result.",
    ],
    tech: ["Python", "FastAPI", "Pydantic", "Claude API", "Gemini API", "Tool Calling"],
    projectSlug: "ai-enterprise-data-assistant",
  },
];
