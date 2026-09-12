import type { ExperienceRole } from "@/types/content";

export const experience: ExperienceRole[] = [
  {
    company: "Codilar Technologies Pvt Ltd",
    role: "Software Engineer",
    period: "Sep 2023 — Present",
    location: "Bengaluru, India",
    tech: [
      "React Native",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST APIs",
      "Python / Django",
      "Java",
    ],
    groups: [
      {
        title: "React Native Mobile Apps — R&B, Lulu GCC, Koton",
        tech: [
          "React Native",
          "iOS",
          "Android",
          "React Navigation",
          "Firebase",
          "MoEngage",
          "Deep Linking",
          "Push Notifications",
        ],
        points: [
          "Shipped cross-platform shopping apps (iOS + Android) to the App Store and Play Store, serving hundreds of thousands of active shoppers for GCC retail brands.",
          "Reduced app cold-start time by 20% through AsyncStorage caching, batched API calls and JavaScript bundle optimisation, measured via Firebase Performance Monitoring.",
          "Integrated Firebase Analytics and Crashlytics for funnel tracking and crash reporting, and implemented MoEngage push campaigns, in-app messaging and segmentation with deep-linked promotional entry points via rebuilt React Navigation flows.",
          "Owned the end-to-end release pipeline — Xcode/Gradle builds, TestFlight and Play Console staging, review coordination, phased rollout — with zero critical production incidents.",
          "Built the Koton app live for the Turkey region, now extending the same codebase with region-specific backend integrations for GCC (in UAT).",
        ],
      },
      {
        title: "Next.js E-Commerce Storefronts — R&B, Lulu GCC, Clarks, Ooka",
        tech: [
          "Next.js",
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "Redux Toolkit",
          "REST APIs",
          "SSR/ISR",
          "Checkout.com",
          "GTM",
        ],
        points: [
          "Delivered features, payment integration and performance work across 4 high-traffic Next.js/React storefronts serving 1M+ monthly users in GCC markets, with measurable Core Web Vitals improvements and SEO ranking gains.",
          "Boosted Lighthouse performance scores from 65 to 90+ via SSR/ISR, dynamic code splitting, CDN image delivery and elimination of render-blocking resources.",
          "Built and shipped Checkout.com payment gateway integration — tokenisation, 3DS authentication, order-confirmation webhooks — enabling secure, PCI-compliant checkout across all GCC storefronts.",
          "Designed a cross-project Tailwind CSS component library (40+ components) adopted across all brand codebases, cutting feature delivery time by ~30%; architected Redux Toolkit and Context API state for cart, checkout and wishlist across desktop and mobile web.",
          "Instrumented the full e-commerce funnel with GTM data-layer events — impressions, add-to-cart, checkout steps, purchases — for accurate conversion attribution.",
          "Rebuilt and stabilised the Ooka storefront on React/Next.js after an AEM migration proof-of-concept was evaluated, delivering the platform the client committed to production.",
          "Contributed to CI/CD and PR review workflows via Akinon ACC, releasing through a tag-based, zero-downtime deployment flow.",
        ],
      },
      {
        title: "Koton — Multi-Region E-Commerce Platform",
        tech: ["Python", "Django", "Jinja2", "Akinon / Omnitron", "React Native", "REST APIs"],
        points: [
          "Delivered features on a large production Django storefront with Jinja2 server-rendered templates for SEO-first pages, extending the vendor commerce platform through middleware and class-level overrides rather than core modifications.",
          "Built country and language switching treating locale and country as independent axes resolved into request context — currency, payment methods, availability, content and RTL handling — including cache-key correctness to prevent cross-region content leakage.",
          "Implemented payment integration and session management across storefront and app contexts, and owned production support: API integration, performance work and root-cause bug fixing on live multi-region traffic.",
        ],
      },
    ],
  },
];
