import type { ImpactItem } from "@/types/content";

export const impact: ImpactItem[] = [
  {
    metric: "65 → 90+",
    label: "Lighthouse performance",
    detail:
      "Raised performance scores across GCC storefronts with SSR/ISR, dynamic code splitting, CDN image delivery and elimination of render-blocking resources — directly improving organic traffic.",
  },
  {
    metric: "20%",
    label: "Faster mobile cold start",
    detail:
      "Reduced React Native app cold-start time through AsyncStorage caching, batched API calls and JavaScript bundle optimisation, measured via Firebase Performance Monitoring.",
  },
  {
    metric: "1M+",
    label: "Monthly users reached",
    detail:
      "Four high-traffic Next.js/React storefronts across GCC markets, plus cross-platform apps serving hundreds of thousands of active shoppers.",
  },
  {
    metric: "Checkout.com",
    label: "Payment integration",
    detail:
      "Built and shipped tokenisation, 3DS authentication and order-confirmation webhooks, enabling secure, PCI-compliant checkout across all GCC storefronts.",
  },
  {
    metric: "40+ / ~30%",
    label: "Component library, faster delivery",
    detail:
      "Designed a cross-project Tailwind CSS component library — cart slider, navigation, promotional widgets — adopted across all brand codebases, cutting feature delivery time by roughly 30%.",
  },
  {
    metric: "Zero",
    label: "Critical production incidents",
    detail:
      "Owned mobile releases end to end — Xcode and Gradle builds, TestFlight and Play Console staging, review coordination, phased rollout. Web releases ship through Akinon ACC on a tag-based, zero-downtime flow: create and push a release tag, build it, then deploy it.",
  },
];
