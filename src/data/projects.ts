import type { Project } from "@/types/content";

/**
 * Ordered deliberately: mobile first, then frontend/e-commerce, then the
 * multi-region platform, then the LLM proof of concept, then independent work.
 * Nothing here is invented — see CONTENT_SOURCES.md for the audit trail.
 */
export const projects: Project[] = [
  {
    slug: "react-native-shopping-apps",
    name: "React Native Shopping Apps",
    kind: "production",
    label: "Production / Client Project",
    brands: ["R&B", "Lulu GCC", "Whites", "Koton"],
    summary:
      "Shopping apps for GCC retail brands, built on React Native CLI and released through the App Store and Google Play.",
    product:
      "Customer-facing shopping apps for GCC retail brands, built on React Native CLI (bare workflow) with individual Expo Modules for specific native capabilities, and released on both iOS and Android.",
    challenge:
      "The apps needed fast startup, stable releases and working re-engagement, and every release had to clear App Store and Google Play review across several brands and regions.",
    contribution:
      "Built app features and navigation flows, cut cold-start time, instrumented analytics and crash reporting, implemented MoEngage push and deep linking, and handled app submissions and releases for R&B, Whites and Koton GCC.",
    result:
      "R&B, Lulu GCC and Whites are live on both stores and Koton GCC is submitted and in review. The apps serve hundreds of thousands of active shoppers, and cold start is 20% faster.",
    tech: [
      "React Native CLI",
      "Expo Modules",
      "iOS",
      "Android",
      "React Navigation",
      "AsyncStorage",
      "Firebase",
      "MoEngage",
      "Deep Linking",
      "Push Notifications",
    ],
    linksTitle: "Live on the stores",
    links: [
      {
        kind: "ios",
        group: "R&B Fashion",
        label: "App Store",
        href: "https://apps.apple.com/in/app/r-b-fashion/id6450224883",
      },
      {
        kind: "android",
        group: "R&B Fashion",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.akinon.randbfashion",
      },
      {
        kind: "ios",
        group: "Lulu Hypermarket",
        label: "App Store",
        href: "https://apps.apple.com/us/app/lulu-hypermarket/id6739010114",
      },
      {
        kind: "android",
        group: "Lulu Hypermarket",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.akinon.lulushopping",
      },
      {
        kind: "ios",
        group: "Whites",
        label: "App Store",
        href: "https://apps.apple.com/sa/app/%D9%88%D8%A7%D9%8A%D8%AA%D8%B3-whites/id1618189900",
      },
      {
        kind: "android",
        group: "Whites",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=net.whites",
      },
    ],
    linksNote: "Koton GCC has been submitted to the App Store and Google Play and is in review, so it is not public yet.",
    caseStudy: {
      overview:
        "Shopping apps for R&B, Lulu GCC, Whites and Koton, built on React Native CLI (bare workflow) with individual Expo Modules for specific native capabilities. The Expo-managed workflow is not used. I handle app submissions and releases for R&B, Whites and Koton GCC. The Koton app is live for the Turkey region, and the same codebase, extended with region-specific backend integrations for GCC, has been submitted to both stores and is in review.",
      context:
        "These are customer-facing retail apps for brands operating across GCC markets. Together they serve hundreds of thousands of active shoppers.",
      role: "Software Engineer at Codilar Technologies. Feature development, performance work, analytics and engagement integration, and app submission and release activities for R&B, Whites and Koton GCC.",
      stack: [
        {
          group: "Mobile",
          items: [
            "React Native CLI (bare workflow)",
            "Expo Modules (not Expo-managed)",
            "iOS & Android",
            "React Navigation",
            "AsyncStorage",
            "Deep Linking",
            "Push Notifications",
          ],
        },
        {
          group: "Analytics & Engagement",
          items: [
            "Firebase Analytics",
            "Firebase Crashlytics",
            "Firebase Performance Monitoring",
            "MoEngage",
          ],
        },
        {
          group: "Release",
          items: [
            "Xcode",
            "Android Studio",
            "Gradle",
            "TestFlight",
            "App Store Connect",
            "Google Play Console",
          ],
        },
      ],
      engineeringWork: [
        {
          title: "Cold-start performance",
          detail:
            "Cut app cold-start time by 20% with AsyncStorage caching, batched API calls and JavaScript bundle optimisation, measured with Firebase Performance Monitoring.",
        },
        {
          title: "Analytics and crash reporting",
          detail:
            "Integrated Firebase Analytics for funnel tracking and Firebase Crashlytics for crash reporting, so problems in a release show up quickly.",
        },
        {
          title: "Engagement and deep linking",
          detail:
            "Implemented MoEngage push campaigns, in-app messaging and segmentation, with deep-linked promotions handled through rebuilt React Navigation flows.",
        },
        {
          title: "React Native CLI with Expo Modules",
          detail:
            "The apps run on React Native CLI (bare workflow) with full control of the native iOS and Android projects. Individual Expo Modules are added only where a specific native capability needs one. The Expo-managed workflow is not used.",
        },
        {
          title: "App submission and release",
          detail:
            "Handle App Store and Google Play submissions and releases for R&B, Whites and Koton GCC. That includes iOS and Android release builds in Xcode and Gradle, TestFlight and Play Console testing, review coordination and phased rollout, as applicable to each app. None of the releases I handled caused a critical production incident.",
        },
        {
          title: "Release status",
          detail:
            "R&B, Lulu GCC and Whites are live on the App Store and Google Play. Koton is live in Turkey. Koton GCC has been submitted to both stores and is in review.",
        },
        {
          title: "Multi-region rollout",
          detail:
            "Built the Koton app that is live in Turkey, then extended the same codebase with region-specific backend integrations for GCC and took it through store submission.",
        },
      ],
      impact: [
        "R&B, Lulu GCC and Whites live on the App Store and Google Play",
        "Koton GCC submitted to both stores, in review",
        "Hundreds of thousands of active shoppers",
        "20% faster app cold start",
        "No critical production incidents from releases I handled",
      ],
    },
  },
  {
    slug: "nextjs-ecommerce-storefronts",
    name: "Next.js E-Commerce Storefronts",
    kind: "production",
    label: "Production / Client Project",
    brands: ["R&B", "Lulu GCC", "Whites"],
    summary:
      "High-traffic Next.js/React storefronts for international retail brands across GCC markets, serving 1M+ monthly users.",
    product:
      "Customer-facing e-commerce storefronts for international retail brands selling across GCC markets.",
    challenge:
      "High-traffic retail sites needed better performance scores, PCI-compliant payments and a consistent component layer across separate brand codebases.",
    contribution:
      "Feature development, payment integration and performance work on live storefronts, including the Checkout.com integration, Lighthouse 65 → 90+, the shared Tailwind component library, cart and checkout state, and GTM tracking.",
    result:
      "1M+ monthly users served, Lighthouse 65 → 90+, PCI-compliant checkout across GCC storefronts, and a 40+ component library shared across brands.",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Context API",
      "REST APIs",
      "SSR/ISR",
      "Checkout.com",
      "GTM",
    ],
    linksTitle: "Live storefronts",
    links: [
      { kind: "site", label: "randbfashion.com", href: "https://randbfashion.com/en_ae" },
      { kind: "site", label: "gcc.luluhypermarket.com", href: "https://gcc.luluhypermarket.com/" },
      { kind: "site", label: "whites.sa", href: "https://whites.sa" },
    ],
    caseStudy: {
      overview:
        "Feature development, payments and performance work on high-traffic Next.js/React storefronts for R&B, Lulu GCC and Whites, serving 1M+ monthly users across GCC markets.",
      context:
        "International retail brands selling across GCC markets, where page speed and checkout reliability matter. Separate brand codebases shared a common component and state foundation.",
      role: "Software Engineer at Codilar Technologies. Storefront engineering, performance, payments, shared component library, state architecture and analytics instrumentation.",
      stack: [
        {
          group: "Frontend",
          items: [
            "Next.js (SSR / ISR / SSG)",
            "React.js",
            "TypeScript",
            "Tailwind CSS",
            "SCSS",
            "Responsive design",
          ],
        },
        { group: "State", items: ["Redux Toolkit", "Context API"] },
        { group: "Payments & Analytics", items: ["Checkout.com", "Google Tag Manager"] },
        {
          group: "Performance",
          items: ["Core Web Vitals", "Lighthouse", "Code splitting", "CDN image delivery", "TTFB"],
        },
        { group: "Delivery", items: ["Akinon ACC", "CI/CD", "Git", "Jira", "Sentry"] },
      ],
      engineeringWork: [
        {
          title: "Performance and rendering strategy",
          detail:
            "Raised Lighthouse performance scores from 65 to 90+ using SSR/ISR, dynamic code splitting, CDN image delivery and removal of render-blocking resources.",
        },
        {
          title: "Checkout.com payment integration",
          detail:
            "Built and shipped the payment gateway integration (tokenisation, 3DS authentication and order-confirmation webhooks) for secure, PCI-compliant checkout across GCC storefronts.",
        },
        {
          title: "Cross-project component library",
          detail:
            "Built a shared Tailwind CSS library of 40+ components, including the cart slider, navigation and promotional widgets, used across brand codebases.",
        },
        {
          title: "Cart and checkout state architecture",
          detail:
            "Set up Redux Toolkit and Context API state for cart, checkout and wishlist flows across desktop and mobile web.",
        },
        {
          title: "Funnel instrumentation",
          detail:
            "Added GTM data-layer events across the funnel (impressions, add-to-cart, checkout steps and purchases) for conversion attribution.",
        },
        {
          title: "Release workflow",
          detail:
            "Contributed to CI/CD and PR reviews through Akinon ACC, which releases through a tag-based, zero-downtime deployment flow: create and push a release tag, build the tag, then deploy it.",
        },
      ],
      impact: [
        "1M+ monthly users across GCC storefronts",
        "Lighthouse performance 65 → 90+",
        "PCI-compliant checkout across GCC storefronts",
        "40+ shared components used across brand codebases",
      ],
    },
  },
  {
    slug: "koton-multi-region-platform",
    name: "Koton Multi-Region E-Commerce Platform",
    kind: "production",
    label: "Production / Client Project",
    brands: ["Koton"],
    summary:
      "Multi-region storefront work spanning a production Django backend and the React Native app, with locale- and country-aware request handling.",
    product:
      "A multi-region e-commerce platform serving different countries and languages from one production Django storefront, alongside the React Native app.",
    challenge:
      "Locale and country vary independently, and so do currency, payment methods, availability, content and RTL. Cached responses must never leak content across regions.",
    contribution:
      "Built country and language switching resolved into request context with correct cache keys, implemented payment integration and session management across storefront and app, and supported production.",
    result:
      "Region-correct storefront behaviour on live multi-region traffic, with platform upgrades and security patches kept safe to apply.",
    tech: ["Python", "Django", "Jinja2", "Akinon / Omnitron", "React Native", "REST APIs"],
    linksTitle: "Live storefront",
    links: [{ kind: "site", label: "koton.ae", href: "https://koton.ae" }],
    caseStudy: {
      overview:
        "Feature delivery and production support on a Django storefront with Jinja2 server-rendered templates for SEO-focused pages, serving multiple countries and languages, alongside the React Native app for the same brand.",
      context:
        "A live multi-region commerce platform where locale, country, currency, payment methods and content availability differ per market, including right-to-left languages.",
      role: "Software Engineer at Codilar Technologies. Backend feature work on the Django storefront, payment and session integration, and production support on live traffic.",
      stack: [
        { group: "Backend", items: ["Python", "Django", "Jinja2", "REST APIs"] },
        { group: "Commerce platform", items: ["Akinon / Omnitron"] },
        { group: "Mobile", items: ["React Native"] },
      ],
      engineeringWork: [
        {
          title: "Upgrade-safe platform extension",
          detail:
            "Extended the vendor commerce platform with middleware and class-level overrides instead of modifying core code, so upgrades and security patches stay safe to apply.",
        },
        {
          title: "Country and language switching",
          detail:
            "Treated locale and country as separate values in the request context, covering currency, payment methods, availability, content and RTL.",
        },
        {
          title: "Server-rendered pages for SEO",
          detail:
            "Delivered features on Jinja2 server-rendered templates for SEO-focused pages within the production Django storefront.",
        },
        {
          title: "Payments and sessions",
          detail:
            "Implemented payment integration and session management across both storefront and app contexts.",
        },
        {
          title: "Production support",
          detail:
            "Supported production on live multi-region traffic with API integration, performance work and root-cause bug fixes.",
        },
      ],
      challenges: [
        {
          title: "Cross-region content leakage",
          detail:
            "Caching a multi-region storefront risks serving one market's content, currency or payment methods to another. Handled by making cache keys region-aware as part of the country and language switching design.",
        },
        {
          title: "Keeping the platform upgradable",
          detail:
            "Customising a vendor commerce platform by editing its core makes future upgrades and security patches unsafe. Extended it through middleware and class-level overrides instead.",
        },
      ],
    },
  },
  {
    slug: "ai-enterprise-data-assistant",
    name: "AI Enterprise Data Assistant",
    kind: "proof-of-concept",
    label: "Client Proof of Concept · Built Independently",
    summary:
      "An LLM tool-calling backend on FastAPI letting business users query live enterprise data in natural language.",
    product:
      "A backend that lets business users retrieve live enterprise data in plain language, for example “how many approved COD orders today”, instead of navigating dashboards.",
    challenge:
      "An LLM answering questions about business data should not estimate figures, and its output has to be treated as untrusted input while latency and token cost stay bounded.",
    contribution:
      "Built the complete backend: the tool-calling loop, Pydantic-generated tool schemas, strict validation of model output, a per-system connector layer, and grounding of every figure in a live tool result.",
    result:
      "Demonstrated to the client, who used this proof of concept to approve a broader AI initiative.",
    tech: [
      "Python",
      "FastAPI",
      "Pydantic",
      "async HTTPX",
      "Claude API",
      "Gemini API",
      "Tool Calling",
      "Omnitron REST APIs",
      "Google Analytics 4",
      "Google OAuth 2.0",
    ],
    caseStudy: {
      overview:
        "A complete LLM tool-calling backend enabling business users to retrieve live enterprise data in natural language, delivered and demonstrated as the proof of concept the client used to evaluate the approach before committing to the project.",
      context:
        "Business users needed answers from product, order and Google Analytics 4 data without navigating dashboards, with figures they could trust.",
      role: "Built the complete backend independently.",
      stack: [
        { group: "Backend", items: ["Python", "FastAPI", "Pydantic", "async HTTPX / asyncio"] },
        { group: "LLM", items: ["Claude API", "Gemini API", "Tool / function calling", "Structured outputs"] },
        {
          group: "Connectors",
          items: ["Omnitron commerce REST APIs", "Google Analytics 4", "Google OAuth 2.0"],
        },
      ],
      engineeringWork: [
        {
          title: "Tool-calling loop",
          detail:
            "Implemented a loop where the model returns structured tool requests and the backend executes them, with tool schemas generated from Pydantic models as a single source of truth.",
        },
        {
          title: "Model output as untrusted input",
          detail:
            "Validated model output with strict schemas, enum-constrained arguments and bounded ranges, and capped the iteration loop to bound latency and token cost.",
        },
        {
          title: "Per-system connector layer",
          detail:
            "Built a connector for each enterprise system (Omnitron commerce APIs and Google Analytics 4) that isolates authentication, retries, response mapping and server-side aggregation, running independent tool calls concurrently over a pooled async HTTP client.",
        },
        {
          title: "Grounding answers in live data",
          detail:
            "Grounded every figure in a live tool result, reported unavailability instead of estimating when an upstream failed, and surfaced the date range, timezone and filters behind each answer.",
        },
      ],
      challenges: [
        {
          title: "Reducing hallucinated business figures",
          detail:
            "A model that guesses a number is worse than one that refuses. Every figure is grounded in a live tool result, unavailability is reported rather than estimated, and the date range, timezone and filters behind each answer are surfaced with it.",
        },
      ],
      impact: ["Approved by the client as the basis for a broader AI initiative"],
    },
  },
  {
    slug: "perflens",
    name: "PerfLens",
    kind: "independent",
    label: "Independent Project",
    summary:
      "A CLI that captures before/after performance snapshots on every pull request, diffs them, and posts the regression report as a PR comment, for both web and React Native.",
    product:
      "A pre/post performance tool: every pull request gets a snapshot before the change, a snapshot after it, a diff report, and an automatic PR/MR comment showing what regressed.",
    challenge:
      "Performance regressions are easy to miss in review, and teams work across different CI platforms (GitLab, GitHub, Bitbucket) and app types (web and React Native), each needing a different profiling approach.",
    contribution:
      "Built the CLI, the snapshot and diff engine, and CI templates for all three platforms, structured as an installable npm package with a typed core (Zod schemas) as the single source of truth.",
    result:
      "A working CLI with snapshot capture, diffing and automatic PR/MR comments working across GitLab, GitHub and Bitbucket. AI-based root-cause analysis is the next phase and is in development.",
    tech: [
      "Node.js",
      "TypeScript",
      "pnpm workspaces",
      "Zod",
      "Lighthouse CI",
      "Hermes Profiler",
      "GitLab CI",
      "GitHub Actions",
      "Bitbucket Pipelines",
    ],
    linksTitle: "Repository",
    links: [],
    linksNote: "Source not yet public.",
    caseStudy: {
      overview:
        "A CLI that automatically captures a performance snapshot before and after a code change, diffs the two, and posts the regression report directly as a comment on the pull or merge request. It works for React/Next.js (via Lighthouse CI) and React Native (via the Hermes profiler), across GitLab, GitHub and Bitbucket.",
      role: "Independent project, designed and built end to end.",
      stack: [
        { group: "Core", items: ["Node.js", "TypeScript", "pnpm workspaces", "Zod (shared schemas)"] },
        { group: "Web profiling", items: ["Lighthouse CI"] },
        { group: "Mobile profiling", items: ["Hermes Profiler (React Native)"] },
        { group: "CI integration", items: ["GitLab CI", "GitHub Actions", "Bitbucket Pipelines"] },
        {
          group: "In development",
          items: ["Claude-based AI root-cause agent", "Next.js results dashboard"],
        },
      ],
      engineeringWork: [
        {
          title: "Snapshot and diff engine",
          detail:
            "Captures a labelled performance snapshot before and after a change (perflens capture --label pre/post), then diffs the two to produce a per-page regression report (perflens compare).",
        },
        {
          title: "Multi-platform CI integration",
          detail:
            "Ships ready-to-use pipeline templates for GitLab CI, GitHub Actions and Bitbucket Pipelines, each posting the before/after diff as an automatic comment on the PR or MR.",
        },
        {
          title: "Cross-platform profiling from one CLI",
          detail:
            "Supports both web projects (Lighthouse CI) and React Native apps (Hermes profiler) through the same capture/compare/report commands.",
        },
        {
          title: "Typed core as a single source of truth",
          detail:
            "All shared types are defined once as Zod schemas, keeping snapshot format, config shape and CLI output consistent across the whole tool.",
        },
      ],
      challenges: [
        {
          title: "Three CI platforms, three auth models",
          detail:
            "GitLab, GitHub and Bitbucket each authenticate and post PR/MR comments differently. GitLab uses CI_JOB_TOKEN or a personal access token, GitHub uses its auto-provided token and Bitbucket uses an app password. The CLI ships a working template and setup steps for each rather than a one-size-fits-all integration.",
        },
      ],
      impact: [
        "Working CLI: init, capture, compare and report commands",
        "Automatic PR/MR regression comments on GitLab, GitHub and Bitbucket",
        "AI root-cause analysis and a results dashboard are the current in-development phase",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.kind === "production");
export const caseStudies = projects.filter((p) => p.caseStudy);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
