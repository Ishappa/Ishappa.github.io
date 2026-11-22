import type { ExperienceRole } from "@/types/content";

export const experience: ExperienceRole[] = [
  {
    company: "Codilar Technologies Pvt Ltd",
    role: "Software Engineer",
    period: "Sep 2023 – Present",
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
        title: "React Native Mobile Apps (R&B, Lulu GCC, Whites, Koton)",
        tech: [
          "React Native CLI",
          "Expo Modules",
          "iOS",
          "Android",
          "React Navigation",
          "Firebase",
          "MoEngage",
          "Deep Linking",
          "Push Notifications",
        ],
        points: [
          "Build and maintain production shopping apps for iOS and Android on React Native CLI (bare workflow), used by hundreds of thousands of shoppers across GCC retail brands. I add individual Expo Modules where a specific native capability needs one, without moving to the Expo-managed workflow.",
          "Handle App Store and Google Play submissions and releases for R&B, Whites and Koton GCC, including iOS and Android release builds in Xcode and Gradle, TestFlight and Play Console testing, review coordination and phased rollouts where applicable. None of the releases I handled caused a critical production incident.",
          "Built the Koton app that is live in Turkey, then extended the same codebase with region-specific backend integrations for Koton GCC, which is now submitted to both stores and in review. R&B, Lulu GCC and Whites are live on the App Store and Google Play.",
          "Cut app cold-start time by 20% with AsyncStorage caching, batched API calls and JavaScript bundle optimisation, measured with Firebase Performance Monitoring.",
          "Integrated Firebase Analytics and Crashlytics for funnel tracking and crash reporting, and implemented MoEngage push campaigns, in-app messaging and segmentation, with deep-linked promotions handled through rebuilt React Navigation flows.",
        ],
      },
      {
        title: "Next.js E-Commerce Storefronts (R&B, Lulu GCC, Whites)",
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
          "Work on high-traffic Next.js/React storefronts serving 1M+ monthly users across GCC markets, covering feature development, payment integration and performance work.",
          "Raised Lighthouse performance scores from 65 to 90+ using SSR/ISR, dynamic code splitting, CDN image delivery and removal of render-blocking resources.",
          "Built and shipped the Checkout.com payment integration (tokenisation, 3DS authentication, order-confirmation webhooks) for secure, PCI-compliant checkout across GCC storefronts.",
          "Built a shared Tailwind CSS component library of 40+ components used across brand codebases, and set up Redux Toolkit and Context API state for cart, checkout and wishlist on desktop and mobile web.",
          "Added GTM data-layer events across the funnel (impressions, add-to-cart, checkout steps, purchases) for conversion attribution.",
          "Contributed to CI/CD and PR reviews through Akinon ACC, which releases with a tag-based, zero-downtime deployment flow.",
        ],
      },
      {
        title: "Koton Multi-Region E-Commerce Platform",
        tech: ["Python", "Django", "Jinja2", "Akinon / Omnitron", "React Native", "REST APIs"],
        points: [
          "Delivered features on a production Django storefront, using Jinja2 server-rendered templates for SEO-focused pages. Extended the vendor commerce platform with middleware and class-level overrides instead of modifying core code, so upgrades and security patches stay safe to apply.",
          "Built country and language switching that treats locale and country as separate values in the request context, covering currency, payment methods, availability, content and RTL. Made cache keys region-aware so content from one region never leaks into another.",
          "Implemented payment integration and session management for the storefront and the app, and supported production on live multi-region traffic with API integration, performance work and root-cause bug fixes.",
        ],
      },
    ],
  },
];
