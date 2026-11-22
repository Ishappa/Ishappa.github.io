import type { ImpactItem } from "@/types/content";

export const impact: ImpactItem[] = [
  {
    metric: "65 → 90+",
    label: "Lighthouse performance",
    detail:
      "Raised Lighthouse performance scores on GCC storefronts using SSR/ISR, dynamic code splitting, CDN image delivery and removal of render-blocking resources.",
  },
  {
    metric: "20%",
    label: "Faster mobile cold start",
    detail:
      "Cut React Native app cold-start time with AsyncStorage caching, batched API calls and JavaScript bundle optimisation, measured with Firebase Performance Monitoring.",
  },
  {
    metric: "1M+",
    label: "Monthly users reached",
    detail:
      "High-traffic Next.js/React storefronts across GCC markets, plus shopping apps used by hundreds of thousands of active shoppers.",
  },
  {
    metric: "Checkout.com",
    label: "Payment integration",
    detail:
      "Built and shipped tokenisation, 3DS authentication and order-confirmation webhooks for secure, PCI-compliant checkout across GCC storefronts.",
  },
  {
    metric: "40+",
    label: "Shared UI components",
    detail:
      "Built a shared Tailwind CSS component library, including the cart slider, navigation and promotional widgets, used across brand codebases.",
  },
  {
    metric: "iOS + Android",
    label: "App submissions & releases",
    detail:
      "Handle App Store and Google Play submissions and releases for R&B, Whites and Koton GCC, from Xcode and Gradle release builds through testing, review and phased rollout. Web releases go out through Akinon ACC with a tag-based, zero-downtime flow: create and push a release tag, build it, then deploy it.",
  },
];
