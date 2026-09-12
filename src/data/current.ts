import type { ProjectLink } from "@/types/content";

/**
 * Brands whose live applications Ishappa has worked on.
 *
 * Label wording matters here: only Koton was built from scratch. On the others
 * the work was feature development, UI fixes, deployment and ongoing
 * maintenance on live products — so the band says "Worked on", not "Built".
 */
export const brandsWorkedOn: { name: string; href?: string }[] = [
  { name: "R&B", href: "https://randbfashion.com/en_ae" },
  { name: "Lulu GCC", href: "https://gcc.luluhypermarket.com/" },
  { name: "Clarks" },
  { name: "Ooka" },
  { name: "Koton", href: "https://koton.ae" },
  { name: "Whites", href: "https://whites.sa" },
];

export const currentWork: {
  label: string;
  name: string;
  detail: string;
  tech: string[];
  links: ProjectLink[];
} = {
  label: "Current project",
  name: "Whites",
  detail:
    "Next.js storefront and React Native mobile app on the Akinon platform — live on the web, App Store and Google Play.",
  tech: ["Next.js", "React Native", "TypeScript", "Akinon"],
  links: [
    { kind: "site", label: "whites.sa", href: "https://whites.sa" },
    {
      kind: "ios",
      label: "App Store",
      href: "https://apps.apple.com/sa/app/%D9%88%D8%A7%D9%8A%D8%AA%D8%B3-whites/id1618189900",
    },
    {
      kind: "android",
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=net.whites",
    },
  ],
};
