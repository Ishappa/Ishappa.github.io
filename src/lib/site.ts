export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a file in /public so it resolves under a GitHub Pages project subpath. */
export const asset = (path: string) => `${basePath}${path}`;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://GITHUB_USERNAME.github.io/portfolio"
).replace(/\/$/, "");

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#contact", label: "Contact" },
] as const;
