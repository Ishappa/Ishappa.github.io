export const profile = {
  name: "Ishappa N",
  title: "Software Engineer — Mobile & Frontend",
  shortTitle: "Software Engineer",
  currentRole: "Software Engineer at Codilar Technologies",
  location: "Bengaluru, India",
  primaryStack: ["React Native", "React.js", "Next.js", "TypeScript", "E-commerce"],

  /** Hero paragraph. Every clause is drawn from the resume. */
  intro:
    "I build production mobile and web e-commerce applications — React Native apps shipped to the App Store and Play Store, and Next.js storefronts serving 1M+ monthly users across GCC markets, together with the payment integrations, performance work and release pipelines behind them.",

  /** About / positioning. Kept to two short paragraphs for scannability. */
  about: [
    "I'm a Software Engineer at Codilar Technologies in Bengaluru, working primarily on mobile and frontend for global e-commerce brands. Most of my work is customer-facing and in production: React Native shopping apps on iOS and Android, and React/Next.js storefronts for R&B, Lulu GCC, Clarks, Ooka and Koton across GCC markets. Day to day that means TypeScript, REST API integration, Redux Toolkit and Context API state for cart and checkout, Checkout.com payments, Core Web Vitals work, and owning releases from Xcode and Gradle builds through to phased rollout.",
    "Alongside that mobile and frontend core, I've worked on the backend of a production Django storefront, built a Java AEM migration proof-of-concept, and contributed Spring Boot REST APIs to an internal SaaS product. More recently I built an LLM tool-calling backend on FastAPI as a client proof of concept, and I use Claude Code and GitHub Copilot daily across the SDLC.",
  ],

  contact: {
    email: "ishwarkuri4@gmail.com",
    phone: "+91 85488-63304",
  },

  /**
   * TODO — Ishappa: replace the two placeholders below with your real URLs.
   * Nothing here is invented; the resume shows the labels but not the addresses.
   *
   * `resume` points at public/Ishappa_N_Resume.pdf (currently a copy of
   * Ishappa_FE_Resume.pdf). Swap that file to change the download.
   */
  links: {
    github: "https://github.com/Ishappa?tab=repositories",
    linkedin: "https://www.linkedin.com/in/ishappa-n-0bb03123a/",
    resume: "/Ishappa_N_Resume.pdf",
  },
} as const;

/** A link is considered unset while it still holds its placeholder token. */
export const isPlaceholder = (value: string) => value.endsWith("_HERE");
