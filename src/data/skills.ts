import type { SkillCategory } from "@/types/content";

/**
 * No ratings, no percentages. Where Ishappa's resume qualifies a skill
 * ("via certification", "working knowledge", "studied, not yet shipped"),
 * that qualifier is preserved in `note` rather than dropped.
 */
export const skills: SkillCategory[] = [
  {
    name: "Mobile",
    tier: "primary",
    items: [
      "React Native (iOS & Android)",
      "React Navigation",
      "Deep Linking",
      "Push Notifications",
      "AsyncStorage",
      "Xcode",
      "Android Studio",
      "App Store & Play Store releases",
    ],
  },
  {
    name: "Frontend",
    tier: "primary",
    items: [
      "React.js",
      "Next.js (SSR / ISR / SSG)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Responsive design",
      "Cross-browser compatibility",
      "Component library design",
    ],
  },
  {
    name: "State Management",
    tier: "primary",
    items: ["Redux", "Redux Toolkit", "Context API"],
  },
  {
    name: "Performance & SEO",
    tier: "primary",
    items: [
      "Core Web Vitals",
      "Lighthouse",
      "Code splitting",
      "Lazy loading",
      "Bundle optimisation",
      "CDN",
      "TTFB",
      "SSR/ISR caching",
      "Performance monitoring",
    ],
  },
  {
    name: "E-commerce & Payments",
    tier: "primary",
    items: [
      "Checkout.com (tokenisation, 3DS, webhooks)",
      "Akinon / Omnitron",
      "Cart, checkout & wishlist flows",
      "Multi-region storefronts",
    ],
  },
  {
    name: "Analytics & Engagement",
    tier: "primary",
    items: [
      "Google Tag Manager",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Firebase Performance Monitoring",
      "MoEngage",
      "Google Analytics 4",
    ],
  },
  {
    name: "APIs",
    tier: "secondary",
    items: [
      "REST API integration",
      "REST API design",
      "OpenAPI / Swagger",
      "Google OAuth 2.0",
      "Postman",
    ],
  },
  {
    name: "Backend",
    tier: "secondary",
    items: [
      "Python",
      "FastAPI",
      "Pydantic",
      "async HTTPX / asyncio",
      "Django",
      "Jinja2",
      "Node.js",
      "Java",
      "Spring Boot",
    ],
    note: "Django in production on a multi-region storefront; FastAPI from a client proof of concept; Spring Boot covered by certification and applied to internal dashboard REST APIs.",
  },
  {
    name: "Databases",
    tier: "secondary",
    items: ["MySQL", "PostgreSQL", "SQL query design & optimisation"],
  },
  {
    name: "AI / LLM",
    tier: "supporting",
    items: [
      "LLM API integration (Claude, Gemini, Groq)",
      "Tool & function calling",
      "Prompt design",
      "Structured outputs",
      "Grounding & hallucination prevention",
    ],
  },
  {
    name: "AEM",
    tier: "supporting",
    items: ["Sling Servlets", "OSGi Services", "Core Components", "HTL"],
    note: "Working knowledge, from a production migration proof-of-concept. Adobe Certified Professional, AEM Developer (2024).",
  },
  {
    name: "Tools & Delivery",
    tier: "secondary",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "CI/CD",
      "Akinon ACC",
      "Tag-based zero-downtime releases",
      "Jira",
      "Sentry",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
];
